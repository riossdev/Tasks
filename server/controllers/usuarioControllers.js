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
    const { title, description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO task (title, description ) VAlUES (?,?)",
      [title, description]
    );
    console.log(result);
    res.json({
      id: result.insertId,
      title,
      description,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error.message" });
  }
};


const updateTask = async (req, res) => {
  try {
    const result = await pool.query("UPDATE task SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.send(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
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
