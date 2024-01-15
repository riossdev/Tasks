import pool from "../db.js";

// Get task
const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM task ");
    console.log(result);
    res.json(result);
    // res.send('Getting Tasks')
  } catch (error) {
    return res.status(404).json({ message: " Error.message" });
  }
};

// Get a single tasks
const getTask = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM task WHERE id = ?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res.status(404).json({ message: "Task no Fund" });
    }
    res.send(result);
  } catch (error) {
    return res.status(500).json({ message: "Error.message" });
  }
};

// create task
const createTasks = async (req, res) => {
  try {
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
  } catch (error) {
    return res.status(500).json({ message: "Error.message" });
  }
};

// Update Task
const updateTask = async (req, res) => {
  try {
    const result = await pool.query("UPDATE task SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.send(result);
  } catch (error) {
    return res.status(500).json({ message: "Error.message" });
  }
};

// Delete Tasks
const deleteTask = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM task WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Taks not Foundd" });
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Error.message" });
  }
};

export { getTasks, getTask, createTasks, updateTask, deleteTask };
