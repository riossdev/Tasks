import { useTask  } from '../context/TaskProvider.jsx'
import { useNavigate } from 'react-router-dom'

function TaskCard({ task }) {
  const { deleteTask } = useTask ()
  const navigate = useNavigate()
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.descriptions}</p>
      <p>{task.createAt}</p> 
      <button onClick={()=> navigate(`/edit/${task.id}`)} >Editar</button>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  )
}
export default TaskCard