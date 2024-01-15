import { useEffect } from "react";

import { getTaskRequest } from "../api/tasks.api";

function TaskPage() {
  useEffect(() => {
    async function loadTask() {
      try {
        const response = await getTaskRequest();
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    loadTask();
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold p-4">Tareas Pendientes!..</h1>
    </div>
  );
}

export default TaskPage;
