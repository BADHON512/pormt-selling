"use server"

import prisma from "@/lib/prismaDb"

export async function getPromptById(promptId:any){
    try {
        const prompt = await prisma.prompts.findUnique({
            include:{
                orders:true,
                images:true,
                reviews: true,
                promptUrl:true
            },
            where:{
                id:promptId
            }
        })
        return prompt
    } catch (error) {
        console.log(error,'get all prompt')
    }
}