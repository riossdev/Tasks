import pool from "../db.js";

// Get Task
const getTasks = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM task ORDER BY createAt ASC");
  console.log(result);
  res.json(result);
  // res.send('Getting Tasks')
};

// Get Tasks
const getTask = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM task WHERE id = ?", [
    req.params.id,
  ]);
  if (result.length === 0) {
    return res.status(404).json({ message: "Task no Fund" });
  }
  res.send(result);
};

// create taks
const createTask = async (req, res) => {
  const { title, descriptions } = req.body;
  const [result] = await pool.query(
    "INSERT INTO task (title, descriptions ) VAlUES (?,?)",
    [title, descriptions]
  );
  console.log(result);
  res.json({
    id: result.insertId,
    title,
    descriptions,
  });
};

// Update Task
const updateTask = async (req, res) => {
  const result =  await pool.query('UPDATE task SET ? WHERE id = ?',[
    req.body,
    req.params.id,
  ]);
  res.send(result)
};

// Delete Tasks
const deleteTask = async (req, res) => {
  const [result] = await pool.query("DELETE FROM task WHERE id = ?", [
    req.params.id,
  ]);
  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Taks not Foundd" });
  }
  return res.sendStatus(204);
};

export { getTasks, getTask, createTask, updateTask, deleteTask };
