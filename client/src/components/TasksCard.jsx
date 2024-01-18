import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/ContextProvider";

function TasksCard({ task }) {
  const { deleteTasks } = useTasks();
  const navigate = useNavigate();
  return (
    <div className="bg-gray-300 w-56  m-4 items-center rounded-lg md:w-80 ">
      <div className="p-6 item ">
        <h1 className="text-2xl font-bold mb-2">{task.title}</h1>
        <p className="text-ms font-semibold ">{task.descriptions}</p>
        {/* <p>{task.done}</p> */}
        <p className="mb-6">{task.createdAt}</p>
        <div className="  flex place-items-end gap-4">
          <button
            className="bg-gray-600 py-2 px-4 rounded"
            onClick={() => {
              navigate(`/edit/${task.id}`);
            }}
          >
            Editar
          </button>
          <button
            className="bg-red-500 py-2 px-4 rounded"
            onClick={() => {
              deleteTasks(task.id);
            }}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default TasksCard;
