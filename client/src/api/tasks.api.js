import axios from "axios";

const createTaskRequest = async (task) => {
  await axios.post("http://localhost:4000/createTask", task);
};

export default createTaskRequest;
