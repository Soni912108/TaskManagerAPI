// Import only the Task model
const Tasks = require("../models/tasks.model.js"); 


// Get all tasks for a specific user
exports.getTasks = async (req, res) => {
  try {
    const userId = req.user._id;  // Use the user ID from the token

    const tasks = await Tasks.find({ createdBy: userId });
    if (tasks.length === 0) {
      return res.status(200).json({ message: 'No tasks created yet' });
    }
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};




// Get a specific task by ID
exports.getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;  // Use the user ID from the token
    
    const task = await Tasks.findById({ _id: id, createdBy: userId });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message  });
  }
};

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const { name, description, completed } = req.body;
    const userId = req.user._id;

    const newTask = new Tasks({ name, description, completed, createdBy: userId });
    const savedTask = await newTask.save();
    res.status(201).json({savedTask, message: "Task created successfully"});
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ message: 'Error creating task', error: error.message });
  }
};



// Update a task
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const userId = req.user._id;  // Use the user ID from the token

    // Find and update the task if it belongs to the user
    const updatedTask = await Tasks.findOneAndUpdate(
      { _id: id, createdBy: userId },
      updates,
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found or not authorized' });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};



// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;  // Use the user ID from the token

    // Find and delete the task if it belongs to the user
    const deletedTask = await Tasks.findOneAndDelete({ _id: id, createdBy: userId });

    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found or not authorized' });
    }

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
