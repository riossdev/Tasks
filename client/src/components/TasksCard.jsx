import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/ContextProvider";

function TasksCard({ task }) {
  const { deleteTasks } = useTasks();
  const navigate = useNavigate();
  return (
    <div className="bg-gray-400 flex text-center">
      <h1>{task.title}</h1>
      <p>{task.descriptions}</p>
      <p>{task.done}</p>
      <p>{task.createdAt}</p>
      <div>
        <button
          className="bg-blue-500 text-white font-medium hover:bg-blue-700 p-2 rounded-lg mr-6"
          onClick={() => {
            navigate(`/edit/${task.id}`);
          }}
        >
          Editar
        </button>
        <button
          className="bg-red-500 text-white font-medium hover:bg-red-700 p-2 rounded-lg "
          onClick={() => {
            deleteTasks(task.id);
          }}
        >
          Eliminar
        </button>
      </div>
      <br></br>
      <br />
    </div>
  );
}

export default TasksCard;
