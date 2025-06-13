import express from "express";
import cors from "cors";
import routes from "./routes/usuarioRoutes.js";

import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const app = express();
const PORT = 5100;

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
  })
);

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server backend listening on port ${PORT}`);
});
