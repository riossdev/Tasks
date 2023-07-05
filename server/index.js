import express from 'express'
import pool from './db.js'
import routes from './routes/usuarioRoutes.js'

import dotenv from 'dotenv'
dotenv.config({path:'.env'})

const app = express()
const PORT = process.env.SERVER_PORT

app.use(routes)

// const result = await pool.query('select 2 + 2 AS result') 
// console.log (result[0])


app.listen(PORT, ()=>{
  console.log(`Server is listening on port ${PORT}`)
})

