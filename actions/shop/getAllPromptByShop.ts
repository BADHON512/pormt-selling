import prisma from "@/lib/prismaDb";
import { currentUser, User } from "@clerk/nextjs/server";

export async function getAllPromptsByShop(){
    try {
        const user:User| null= await currentUser()
        const sellerId=user?.id
        const prompts= await prisma.prompts.findMany({
            where:{
                sellerId:sellerId
            },
            include:{
                orders:true
            }
        })
        return prompts
    } catch (error) {
        console.log(error)
    }
}