const Tasks = require("../Models/task");
const mongoose = require("mongoose");
//logic for creating task
exports.createTask = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  try {
    const task = new Tasks({ title, description });
    // console.log(task);
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
//logic for getting all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const allTasks = await Tasks.find();
    res.status(200).json(allTasks);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
//logic for getting task by ID
exports.getTasksById = async (req, res) => {
  const Id = req.params.id;
  if (!mongoose.isValidObjectId(Id)) {
    return res.status(400).json({ message: "Invalid task ID format" });
  }

  try {
    const task = await Tasks.findById(Id);

    if (!task) {
      res.status(404).json({ message: "task not found" });
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
//Delete task using id
exports.deleteTaskById = async (req, res) => {
  const Id = req.params.id;
  try {
    const task = await Tasks.findByIdAndDelete(Id);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task Deleted Successfully" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
//update task status using ID
exports.updateTask = async (req, res) => {
  const Id = req.params.id;
  const status = req.body.status;
  try {
    const task = await Tasks.findByIdAndUpdate(
      Id,
      { status: status },
      { new: true, runValidators: true }
    );
    if (!task) {
      return res.status(404).json({ message: "task not found" });
    }
    // console.log(task);
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

