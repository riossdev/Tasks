import axios from "axios";

export const getRequestTask = async () => {
  const response = await axios.get("http://localhost:4000/tasks");
  return response.data
};

export const createTaskRequest = async (task) => {
  await axios.post("http://localhost:4000/createTask", task);
};

export const deleteTaskRequest = async (id) =>{
  await axios.delete(`http://localhost:4000/deleteTask/${id}`)
}

export const getTask = async (id) => {
  await axios.get(`http://localhost:4000/task/${id}`) 
}