import { Router } from 'express'
import { 
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
  } from '../controllers/usuarioControllers.js'

const routes = Router()

routes.get('/tasks', getTasks)

routes.get('/task/:id', getTask)

routes.post('/createTask', createTask)

routes.put('/updateTask/:id', updateTask)

routes.delete('/deleteTasks/:id', deleteTask)

export default routes