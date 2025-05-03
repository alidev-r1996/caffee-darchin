"use server";

import { prisma } from "../utils/prisma";
import { getUserId } from "./user-action";

export async function GetFood() {
  return await prisma.food.findMany({
    include: {
      categories: {
        select: {
          category: {
            select: {
              id: true,
              title: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function RemoveFood(foodId: string) {
  try {
    await prisma.food.delete({
      where: {
        id: foodId,
      },
    });
    return { message: "Food deleted successfully" };
  } catch (error) {
    console.log(error);
    return { message: "Failed to delete food" };
  }
}

export async function AddFood(
  title: string,
  price: string,
  categoryId: string,
  ingredients: string[],
  img: string,
  rating: string
) {
  const userId = await getUserId();
  try {
    await prisma.food.create({
      data: {
        title: title,
        price: Number(price),
        ingredients: ingredients,
        img: img as string,
        rating: Number(rating),
        userId: userId as string,

        // Connect to existing category via FoodCategory
        categories: {
          create: [
            {
              category: {
                connect: { id: categoryId as string },
              },
            },
          ],
        },
      },
    });
    return { message: "Food added successfully" };
  } catch (error) {
    console.log(error);
    return { message: "Failed to add food" };
  }
}

export async function EditFood(
  title: string,
  price: string,
  categoryId: string,
  ingredients: string[],
  img: string,
  rating: string,
  foodId: string
) {
  try {
    await prisma.$transaction(async (tx) => {
      await tx.foodCategory.deleteMany({
        where: {
          foodId: foodId,
        },
      });

      await tx.food.update({
        where: {
          id: foodId,
        },
        data: {
          title,
          price: Number(price),
          ingredients,
          img,
          rating: Number(rating),
          categories: {
            create: [
              {
                category: {
                  connect: { id: categoryId },
                },
              },
            ],
          },
        },
      });
    });
    return { message: "Food edited successfully" };
  } catch (error) {
    console.log("EditFood Error:", error);
    return { message: "Failed to edit food" };
  }
}

export async function GetFoodPaginate(page: string, limit?: number) {
  const limitDefault = limit ?? 8;
  const skip = (Number(page) - 1) * limitDefault;

  return await prisma.$transaction(async (tx) => {
    const food = await tx.food.findMany({
      skip,
      take: limitDefault,
      include: {
        categories: {
          select: {
            category: {
              select: { id: true, title: true },
            },
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    const count = await tx.food.count();

    return {
      food,
      meta: {
        totalCategory: count,
        totalPage: Math.ceil(count / limitDefault),
        currentPage: Number(page),
      },
    };
  });
}

