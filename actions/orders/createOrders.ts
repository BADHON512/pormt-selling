"use server";
import prisma from "@/lib/prismaDb";

export const newOrder = async ({
  userId,
  payment_id,
  payment_method,
  promptId,
}: {
  userId: string;
  promptId: string;
  payment_method: string;
  payment_id: string;
}) => {
  try {
    const newOrdersData = {
      userId,
      promptId,
      payment_id,
      payment_method: "Master card dummy",
    };

    const order = await prisma.orders.create({
      data: newOrdersData,
    });
    await prisma.shops.update({
      where: {
        userId,
      },
      data: {
        totalSales: { increment: 1 },
      },
    });
    return order;
  } catch (error) {
    console.log(error);
  }
};
