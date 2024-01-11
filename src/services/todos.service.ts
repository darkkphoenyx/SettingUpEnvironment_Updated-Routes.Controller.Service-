/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const getTodos=() =>{
    return[
        {
            id: 64564654,
            titile: 'doSomething',
        }
    ]
}

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const createPost = async (body: any) => {
    const { id, title, status } = body
    return await prisma.todo.create({
        data: {
        
            title,
            status,
        },
    })
}
