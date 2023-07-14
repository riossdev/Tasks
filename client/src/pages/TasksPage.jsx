import { useEffect } from "react";
import {getTaskRecuest} from "../api/tasks.api.js";

function TaskPage() {
  useEffect(() => {
    async function loadTasks() {
      const response = await getTaskRecuest();
      console.log(response);
    }
    loadTasks();
  }, []);

  return (
    <div>
      <h1>Tasks.</h1>
    </div>
  );
}

export default TaskPage;
