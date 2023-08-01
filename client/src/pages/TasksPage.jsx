import { useEffect } from 'react'
import TaskCard from '../components/TaskCard.jsx'
import { useTask } from '../context/TaskContext'

function getTask() {
  const { Task, loadTask } = useTask()

  useEffect(() => {
    loadTask()
  }, [])

  function renderMain() {
    if (Task.length === 0) return <h4> No tienes Tareas pendientes 🙌</h4>
    return Task.map(task => (<TaskCard task={task} key={task.id} />))
  }

  return (
    <div>
      <h1>Tareas Creadas</h1>
      {renderMain()}
    </div>
  )
}


export default getTask