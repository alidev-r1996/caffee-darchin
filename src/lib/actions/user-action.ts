"use server";

import { auth } from "../../auth";
import { prisma } from "@/lib/utils/prisma";

export async function getUserId() {
  const session = await auth();
  if (!session) return null;
  if (session?.user?.email) {
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        id: true,
      },
    });
    return user?.id;
  }
}

export async function GetAllUsers() {
  const userId = await getUserId();
  if (!userId) return null;
  const users = await prisma.user.findMany({
    where: {
      NOT: {
        id: userId,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return users;
}

export async function getUserInfo() {
  const userId = await getUserId();
  if (userId) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        img: true,
        name: true,
        email: true,
        password: true,
      },
    });
    return user;
  } else {
    return null;
  }
}

export async function RemoveUser(userId: string) {
  try {
    const user = await prisma.user.delete({
      where: {
        id: userId,
      },
    });
    return { message: "User deleted successfully" };
  } catch (error) {
    return { message: "Failed to delete user" };
  }
}

export async function AddUser(
  name: string,
  email: string,
  password: string,
  img: string,
  role: "USER" | "ADMIN"
) {
  try {
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
        img: img,
        role: role,
      },
    });
    return { message: "User added successfully" };
  } catch (error) {
    return { message: "Failed to add user" };
  }
}

export async function EditUser(
  name: string,
  email: string,
  password: string,
  img: string,
  role: "USER" | "ADMIN"
) {
  try {
    const user = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        name: name,
        email: email,
        password: password,
        img: img,
        role: role,
      },
    });
    return { message: "User updated successfully" };
  } catch (error) {
    return { message: "Failed to update user" };
  }
}

export async function GetUserRole() {
  const userId = await getUserId();
  if (!userId) return;
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      role: true,
    },
  });
  const role: any = user?.role;
  if (!role) return null;
  if (role == "ADMIN") {
    return "ADMIN";
  } else {
    return "USER";
  }
}

export async function GetUserPaginate(page: string, limit?: number) {
  const userId = await getUserId();
  if (!userId) return null;
  const limitDefault = limit ?? 8;
  const skip = (Number(page) - 1) * limitDefault;

  return await prisma.$transaction(async (tx) => {
    const users = await tx.user.findMany({
      skip,
      take: limitDefault,
      where: {
        NOT: {
          id: userId,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const count = await tx.user.count();

    return {
      users,
      meta: {
        totalCategory: count,
        totalPage: Math.ceil(count / limitDefault),
        currentPage: Number(page),
      },
    };
  });
}
