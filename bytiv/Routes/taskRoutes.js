const express = require('express');
const taskController = require('../Controllers/taskController');
const router = express.Router();

//create task
router.post('/',taskController.createTask);
//get all tasks
router.get('/',taskController.getAllTasks);
//get task by id
router.get("/:id",taskController.getTasksById)
//delete task by id
router.delete("/:id",taskController.deleteTaskById);
//update taks
router.put("/:id",taskController.updateTask);
module.exports=router;