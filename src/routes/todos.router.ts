// import { Router } from 'express'
// import * as TodosController from '../controllers/todos.controller'
// import { getTodos } from '../services/todos.service'
// const router = Router()

// router.post('/',)
// router.get('/', getTodos)
// export default router

import { Router } from 'express'

import * as TodoController from '../controllers/todos.controller'
const router = Router()

router.get('/', TodoController.getTodos)

router.post('/', TodoController.createTodo)
export default router
