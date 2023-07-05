import { createPool } from "mysql2/promise";
import dotenv from 'dotenv'
dotenv.config({path:'.env'})

const pool =  createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  database: process.env.DATABASE
})


export default pool