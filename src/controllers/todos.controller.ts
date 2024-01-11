/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { NextFunction, Request, Response } from 'express'
import * as TodoService from '../services/todos.service'
// import * as getTodos from '../services/todos.service'

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getTodos = (req: Request, res: Response, next: NextFunction) => {
    const response = TodoService.getTodos()
    res.send(response)
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createTodo = (req: Request, res: Response, next: NextFunction) => {
    const response = TodoService.createPost(req.body)
    res.send(response)
}
