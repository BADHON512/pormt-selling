import prisma from "@/lib/prismaDb"


export const topSeller= async()=>{
    
    try {
    
        const findSeller:any= await prisma.shops.findMany({
    
            
        })
    
        const topSeller:any= await prisma.shops.findMany({
            where:{
                userId:findSeller.userId
            }
        })
        
        return topSeller
    } catch (error) {
        console.log(error)
    }
}
