import { useContext, useState } from 'react'
import { getRequestTask } from '../api/tasks.api'
import { TaskContext } from './TaskContext'
import { deleteTaskRequest, getTask } from '../api/tasks.api'

export const useTask = () => {
  const context = useContext(TaskContext)
  if (!context)
    throw new Error("No esta dentro del context Provider")
  return context
}

const TaskContextProvider = ({ children }) => {
  const [Task, setTask] = useState([])
  async function loadTask() {
    const response = await getRequestTask()
    setTask(response)
  }

  function deleteTask(id) {
    try {
      setTask(Task.filter(task => task.id !== id))
      deleteTaskRequest(id)
      // console.log(response)
    } catch (error) {
      return res.status(404).json({ messege: 'Error Message' })
    }
  }

  const getTaskss = async (id) => {
    try {
      const response = await getTask(id)
      return response.data
    } catch (error) {

    }
  }
  return <TaskContext.Provider value={{ Task, loadTask, deleteTask, getTaskss }}>{children}</TaskContext.Provider>
}
export {
  TaskContextProvider,
  TaskContext
}