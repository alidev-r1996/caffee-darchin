"use server";

import { prisma } from "../utils/prisma";
import { getUserId } from "./user-action";

export async function GetCategoryPaginate(page: number, limit?: number) {
  const limitDefault = limit ?? 8;
  const skip = (page - 1) * limitDefault;
  let category: any[];
  let count = 0;

  return await prisma.$transaction(async (tx) => {
    category = await tx.category.findMany({
      skip: skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });
    count = await tx.category.count();

    return {
      category,
      meta: {
        totalCateogry: count,
        totalPage: Math.ceil(count / limitDefault),
      },
    };
  });
}

export async function GetCategory() {
  return await prisma.category.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function RemoveCategory(categoryId: string) {
  try {
    await prisma.category.delete({
      where: {
        id: categoryId,
      },
    });

    return { message: "Category deleted successfully" };
  } catch (error) {
    console.log(error);
    return { message: "Failed to delete category" };
  }
}

export async function AddCategory(
  title: string,
  englishTitle: string,
  img: string
) {
  const userId = await getUserId();
  try {
    await prisma.category.create({
      data: {
        title: title,
        userId: userId as string,
        img: img,
        englishTitle: englishTitle,
      },
    });
    return { message: "Category added successfully" };
  } catch (error) {
    console.log(error);
    return { message: "Failed to add category" };
  }
}

export async function EditCategory(
  title: string,
  englishTitle: string,
  img: string,
  categoryId: string
) {
  try {
    await prisma.category.update({
      where: {
        id: categoryId,
      },
      data: {
        title: title,
        img: img,
        englishTitle: englishTitle,
      },
    });
    return { message: "Category edited successfully" };
  } catch (error) {
    console.log(error);
    return { message: "Failed to edit category" };
  }
}
