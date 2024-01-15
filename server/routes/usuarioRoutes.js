import { Router } from "express";
import {
  getTasks,
  getTask,
  createTasks,
  updateTask,
  deleteTask,
} from "../controllers/usuarioControllers.js";

const routes = Router();

routes.get("/tasks", getTasks);
routes.get("/task/:id", getTask);
routes.post("/createTasks", createTasks);
routes.put("/updateTask/:id", updateTask);
routes.delete("/deleteTask/:id", deleteTask);

export default routes;
