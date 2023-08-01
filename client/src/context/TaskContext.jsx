import { createContext, useContext, useState } from 'react'
import { getRequestTask } from '../api/tasks.api'
const TaskContext = createContext()

export const useTask = () =>{
  const context = useContext(TaskContext)
  if(!context)
    throw new Error("NO esta dentro del context Provider")
  return context
}

const TaskContextProvider = ( {children} ) =>{

  const [Task, setTask] = useState([])

  async function loadTask() {
    const response = await getRequestTask()
    setTask(response)
  }

  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id)
      console.log(response)
    } catch (error) {
      return res.status(404).json({ messege: 'Error Message' })
    }
  }

  return <TaskContext.Provider value={{ Task, loadTask, deleteTask }}>{children}</TaskContext.Provider>
}

export {
  TaskContextProvider,
  TaskContext
}