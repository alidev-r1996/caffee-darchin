"use server";

import { auth } from "../../auth";
import {prisma} from "@/lib/prisma"

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

export async function getUserInfo() {
  const session = await auth();
  if (session?.user?.email) {
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      include: {

      },
    });
    return user;
  }
}
