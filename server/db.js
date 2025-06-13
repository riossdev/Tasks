import { createPool } from "mysql2/promise";
import dotenv from 'dotenv'
dotenv.config({path:'.env'})

const pool =  createPool({
  host: "localhost",
  user: "root",
  password: "root",
  port: "33066",
  database: "tasks"
})


export default pool