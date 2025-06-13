import { useEffect } from "react";

import TasksCard from "../components/TasksCard";
import { useTasks } from "../context/ContextProvider";

function TaskPage() {
  // const [Tasks, setTasks] = useState([]);
  const { Tasks, loadTask } = useTasks();

  useEffect(() => {
    loadTask();
  }, []);

  function renderTasks() {
    if (Tasks.length === 0)
      return (
        <h1 className="text-center font-bold p-4 text-4xl text-white">
          ✌️Que buena noticia, No tienes tareas pendientes! esto esta super!!!. 🙌
          Eres un crack!
        </h1>
      );
    return (
      <div className="w-full">
        <h1 className="text-center font-bold p-4 text-4xl text-white">
          Tareas Pendientes!..
        </h1>
        <div className="sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Tasks.map((task) => (
            <TasksCard task={task} key={task.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>{renderTasks()}</div>
    </div>
  );
}

export default TaskPage;
