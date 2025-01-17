import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismaDb";


export async function GET(req: NextRequest, { params }: { params: any }) {
  try {
    const promptId = params.promptId;
   console.log(promptId)
    if (!promptId) {
      return new NextResponse("Missing 'promptId' query parameter", {
        status: 400,
      });
    }

    const prompt: any = await prisma.prompts.findUnique({
      include: {
        orders: true,
        images: true,
        reviews: true,
        promptUrl: true,
      },
      where: {
        id: promptId,
      },
    });



    return NextResponse.json(prompt);
  } catch (error) {
    console.log("get prompts error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
