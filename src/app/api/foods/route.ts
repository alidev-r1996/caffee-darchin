import { prisma } from "@/lib/utils/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const title = req.nextUrl.searchParams.get("title");

  const foods = await prisma.food.findMany({
    where: title
      ? {
          categories: {
            some: {
              category: {
                englishTitle: title,
              },
            },
          },
        }
      : undefined,
    include: {
      categories: {
        select: {
          category: {
            select: {
              id: true,
              englishTitle: true,
            },
          },
        },
      },
    },
  });

  return Response.json(foods);
}
