import express from "express";
import cors from "cors";
import routes from "./routes/usuarioRoutes.js";

import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server backend listening on port ${PORT}`);
});
