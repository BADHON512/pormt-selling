// todo

import prisma from "@/lib/prismaDb";
import { currentUser, User } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    try {
        const user: User | null = await currentUser() 
        if(!user ){
            return new NextResponse('Please login to access this resources', { status: 401 })
        }
        const shop =await prisma.shops.findUnique({
            where:{
                userId:user.id
            }
        })
        return NextResponse.json({user,shop})
     
    } catch (error) {
        console.log('load user error',error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}