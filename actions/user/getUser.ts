"use server";
import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prismaDb";

export async function getUser() {
  try {
    const user = await currentUser();

    if (!user) {
      return null; // Handle unauthenticated state
    }

    // Extract only necessary plain properties from the user
    const serializedUser = {
      id: user.id,
      username: user.username,
      email: user.primaryEmailAddress?.emailAddress || null,
      imageUrl: user.imageUrl || null,
      firstName: user.firstName || null,
      lastName: user.lastName || null,
    };

    const shop = await prisma.shops.findUnique({
      where: {
        userId: user.id,
      },
    });

    return { user: serializedUser, shop };
  } catch (error) {
    console.error("Error loading user:", error);
    return null;
  }
}
