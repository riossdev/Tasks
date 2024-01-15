import axios from "axios";

const getTaskRequest = async () => {
  return await axios.get("http://localhost:4000/tasks");
};

const createTasksRequest = async (task) => {
  return await axios.post("http://localhost:4000/createTasks", task);
};

export { createTasksRequest, getTaskRequest };
