const Task = require("../models/Task");

const createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title:req.body.title,
      priority:req.body.priority
    });

    res.status(201).json(task);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getTasks = async (req, res) => {
  try {

    const tasks = await Task.find().sort({
      createdAt: -1
    });

    res.json(tasks);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const updateTask = async (req, res) => {

  try {

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedTask);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};

const deleteTask = async (req, res) => {

  try {

    await Task.findByIdAndDelete(req.params.id);

    res.json({
      message: "Task Deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask
};