import prisma from "@/lib/prismaDb"

interface Props{
    sellerId:string,

}
export const getShopOrders=async({sellerId}:Props)=>{
    try {
        
        const orders=await prisma.orders.findMany({
            where:{
                prompt:{
                    sellerId
                }
            },
            include:{
                prompt:true
            }
        })

        
        return orders
    } catch (error) {
        console.log(error)
    }
}