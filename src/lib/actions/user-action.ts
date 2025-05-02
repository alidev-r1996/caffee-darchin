"use server";

import { auth } from "../../auth";
import { prisma } from "@/lib/utils/prisma";

export async function getUserId() {
  const session = await auth();
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
  });
  return users;
}

export async function getUserInfo() {
  const session = await auth();
  if (session?.user?.email) {
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        img: true,
        name: true,
        email: true,
      },
    });
    return user;
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
