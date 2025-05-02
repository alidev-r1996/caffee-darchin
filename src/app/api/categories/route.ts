import { prisma } from "@/lib/utils/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const category = await prisma.category.findMany();
  return Response.json(category);
}
