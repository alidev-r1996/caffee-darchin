"use server";

import { prisma } from "../utils/prisma";
import { getUserId } from "./user-action";

export async function GetCategoryPaginate(page: string, limit?: number) {
  const limitDefault = limit ?? 8;
  const skip = (Number(page) - 1) * limitDefault;

  return await prisma.$transaction(async (tx) => {
    const category = await tx.category.findMany({
      skip,
      take: limitDefault,
      orderBy: { createdAt: "desc" },
    });

    const count = await tx.category.count();

    return {
      category,
      meta: {
        totalCategory: count,
        totalPage: Math.ceil(count / limitDefault),
        currentPage: Number(page),
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
