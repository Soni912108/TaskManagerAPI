// Import only the Task model
const { Tasks } = require("../models/tasks.model.js"); // Assuming models.js is in a folder named "models" one level above

const getTasks = async (req, res) => {
  try {
    const { userId } = req.params;
    const tasks = await Tasks.find({ createdBy: userId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Tasks.findById(id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const createTask = async (req, res) => {
  try {
    const task = await Tasks.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Tasks.findByIdAndUpdate(id, req.body);
    console.log(task);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    const updateTask = await Tasks.findById(id);
    res.status(200).json(updateTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Tasks.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
