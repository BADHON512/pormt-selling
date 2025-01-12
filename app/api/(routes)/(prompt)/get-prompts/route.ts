import prisma from "@/lib/prismaDb";
import { currentUser, User } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const user: User | null = await currentUser();
    const sellerId = user?.id;

    const prompts = await prisma.prompts.findMany({
      where: {
        sellerId,
      },
      include: {
        orders: true,
      },
    });

    return NextResponse.json(prompts);
  } catch (error) {

    return new NextResponse("Internal Error", { status: 500 });
  }
}
