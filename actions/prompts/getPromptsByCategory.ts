"use server"

import prisma from "@/lib/prismaDb"

export async function getPromptsByCategories(promptCategories:any){
    try {
        const prompt = await prisma.prompts.findMany({
            include:{
                orders:true,
                images:true,
                reviews: true,
                promptUrl:true
            },
            where:{
                category:promptCategories
            }
        })
        return prompt
    } catch (error) {
        console.log(error,'get all prompt')
    }
}