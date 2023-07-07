import  pool  from "../db.js"

const getTasks = (req, res)=>{  
  res.send('Getting Tasks')
}

const getTask = (req, res)=>{
  res.send('Get task')
}

// create taks
const createTask = async (req, res)=>{
  const { title, descriptions } = req.body;
  const result = await pool.query(
    "INSERT INTO task ( title, descriptions ) VAlUES (?,?)",
  [title, descriptions]
  );
  // console.log(result)
  res.json({
    id: result.insertId,
    title,
    descriptions,
  })
}


const updateTask = (req, res)=>{
  res.send('Update tasks')
}
const deleteTask = (req, res)=>{
  res.send('Delete tasks')
}


export {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
}