import prisma from "@/lib/prismaDb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
     console.log("create shop error", data);
    const userId = data.userId;
    //check the user id already exist or not
    const user = await prisma.shops.findUnique({
      where: {
        userId: userId,
      },
    });

    if (user) {
      return new NextResponse("You already have one shop with this account ", {
        status: 400,
      });
    }

    const shop = await prisma.shops.create({ data });
    return NextResponse.json(shop);
  } catch (error) {
   
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}
