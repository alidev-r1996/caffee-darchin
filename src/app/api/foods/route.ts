import { prisma } from "@/lib/utils/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams.get("title");
  const foods = await prisma.food.findMany({
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
  console.log(params);
  if (!params) return Response.json(foods);
  const filterFoods = foods.filter(
    (food) => food.categories[0].category.englishTitle == params
  );
  return Response.json(filterFoods);
}
