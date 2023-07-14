import axios from "axios";

export const getTaskRecuest = async () => {
  await axios.get("http://localhost:4000/tasks");
};

export const createTaskRequest = async (task) => {
  await axios.post("http://localhost:4000/createTask", task);
};

// export default { 
//   createTaskRequest, 
//   getTaskRecuest 
// };
