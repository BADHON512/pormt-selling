import prisma from "@/lib/prismaDb"


export const getAllPrompts=async()=>{
    try {
        
        const allprompts:any=await prisma.prompts.findMany()
        return allprompts
    } catch (error) {
        console.log(error)
    }
}