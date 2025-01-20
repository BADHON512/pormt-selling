import prisma from "@/lib/prismaDb"


export const getAllPrompts=async()=>{
    try {
        
        const allprompts:any=await prisma.prompts.findMany({
            include:{
                images:true,
                reviews:true,
                promptUrl:true,
                orders:true
            }
        })
        return allprompts
    } catch (error) {
        console.log(error)
    }
}