import TaskContext from "./TaskContext";
import { useContext } from "react";
import { useState } from "react";

import {
  getTasksRequest,
  deleteTasksRequest,
  createTasksRequest,
  getTaskUpdateRequest,
  updateTaskRequest,
} from "../api/tasks.api";

const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context)
    throw new error("El componente no esta dentro del  TaskConterProvider");
  return context;
};

const TaskContextProvider = ({ children }) => {
  const [Tasks, setTasks] = useState([]);

  async function loadTask() {
    try {
      const response = await getTasksRequest();
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const deleteTasks = async (id) => {
    const response = await deleteTasksRequest(id);
    setTasks(Tasks.filter((task) => task.id !== id));
    console.log(response);
  };

  const createTasks = async (task) => {
    try {
      const response = await createTasksRequest(task);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getTask = async (id) => {
    try {
      const response = await getTaskUpdateRequest(id);
      return response.data[0];
    } catch (error) {
      console.error(error);
    }
  };

  const updateTasks = async (id, newFields) => {
    try {
      const response = await updateTaskRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        Tasks,
        loadTask,
        deleteTasks,
        createTasks,
        getTask,
        updateTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContextProvider, useTasks };
