// import { deleteTaskRequest } from '../api/tasks.api'
import { useTask } from '../context/TaskContext'
// import { deleteTask } from '../context/TaskContext'

function TaskCard({ task }) {


  const {deleteTask } = useTask ()
  // deleteTaskRequest()

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.descriptions}</p>
      <p>{task.createAt}</p>
      <button>Editar</button>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  )
}
export default TaskCard