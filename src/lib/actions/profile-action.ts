"use server"

import { prisma } from "../utils/prisma";
import { getUserId } from "./user-action";

export async function GetUserReservation(page: string, limit?: number) {
  const limitDefault = limit ?? 8;
  const skip = (Number(page) - 1) * limitDefault;
  const userId = await getUserId();
  if (!userId) return null;

  return await prisma.$transaction(async (tx) => {
    const request = await tx.reserve.findMany({
      where: {
        userId: userId,
      },
      skip,
      take: limitDefault,
      orderBy: { createdAt: "desc" },
    });

    const count = await tx.reserve.count();

    return {
      request,
      meta: {
        totalCategory: count,
        totalPage: Math.ceil(count / limitDefault),
        currentPage: Number(page),
      },
    };
  });
}

export async function EditProfile(
  name: string,
  email: string,
  password: string
) {
  
  try {
    await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        name,
        email,
        password,
      },
    });
    return { message: "user edited successfully" };
  } catch (error) {
    console.log(error);
    return { message: "Failed to edit user" };
  }
}
