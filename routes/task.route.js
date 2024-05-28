const express = require("express");
const router = express.Router();
const {getTasks, getTask, createTask, updateTask, deleteTask} = require('../controllers/tasks.controller.js');


// Route for fetching tasks for a specific user
router.get('/:userId', getTasks);

router.get("/:id", getTask);

router.post("/", createTask);

// update a product
router.put("/:id", updateTask);
router.patch("/:id", updateTask);


// delete a product
router.delete("/:id", deleteTask);


module.exports = router;
