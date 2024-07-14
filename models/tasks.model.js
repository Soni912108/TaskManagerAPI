const mongoose = require("mongoose");

// initializing a simple mongoose Schema to represent the tasks
const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter task name"],
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users", // Reference the User model
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Tasks", TaskSchema);
