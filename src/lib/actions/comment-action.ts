"use server";

import { prisma } from "../utils/prisma";

export async function GetComments() {
  return await prisma.comment.findMany({
    include: {
      user: {
        select: {
          name: true,
          email: true,
          id: true,
        },
      },
      food: {
        select: {
          title: true,
          id: true,
        },
      },
    },
    orderBy:{
      createdAt: "desc"
    }
  });
}

export async function RemoveComment(
  userId: string,
  foodId: string,
  time: string
) {
  try {
    await prisma.comment.deleteMany({
      where: {
        foodId: foodId,
        userId: userId,
        createdAt: time,
      },
    });
    return { message: "Comment deleted successfully" };
  } catch (error) {
    console.log(error);
    return { message: "Something went wrong" };
  }
}

export async function ConfirmComment(
  userId: string,
  foodId: string,
  status: boolean,
  time: string
) {
  try {
    await prisma.comment.updateMany({
      where: {
        foodId: foodId,
        userId: userId,
        createdAt: time,
      },
      data: {
        verified: status,
      },
    });
    return { message: "Comment changed Status successfully" };
  } catch (error) {
    console.log(error);
    return { message: "Something went wrong" };
  }
}
