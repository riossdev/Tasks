import axios from "axios";

const getTasksRequest = async () => {
  return await axios.get("http://localhost:4000/tasks");
};

const getTaskUpdateRequest = async (id) => {
  return await axios.get(`http://localhost:4000/updateTask/${id}`);
};

const createTasksRequest = async (task) => {
  return await axios.post("http://localhost:4000/createTasks", task);
};

const deleteTasksRequest = async (id) => {
  return await axios.delete(`http://localhost:4000/deleteTask/${id}`);
};

export {
  createTasksRequest,
  getTasksRequest,
  deleteTasksRequest,
  getTaskUpdateRequest,
};
