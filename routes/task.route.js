// task.route.js
const express = require('express');
const router = express.Router();
const { getTasks, getTask, createTask, updateTask, deleteTask } = require('../controllers/tasks.controller.js');
const auth = require('../middleware/auth');


router.get('/getAllTasks',auth, getTasks);
router.get('/getSingleTask/:id', auth, getTask);
router.post('/createTask', auth, createTask);
router.put('/updateTask/:id', auth, updateTask);
router.patch('/updateTask/:id', auth, updateTask);
router.delete('/deleteTask/:id', auth, deleteTask);


module.exports = router;
