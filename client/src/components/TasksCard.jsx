import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/ContextProvider";

function TasksCard({ task }) {
  const { deleteTasks } = useTasks();
  const navigate = useNavigate();
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.descriptions}</p>
      <p>{task.done}</p>
      <p>{task.createdAt}</p>
      <button
        onClick={() => {
          navigate(`/edit/${task.id}`);
        }}
      >
        Editar
      </button>
      <button
        onClick={() => {
          deleteTasks(task.id);
        }}
      >
        Eliminar
      </button>
      <br></br>
      <br />
    </div>
  );
}

export default TasksCard;
