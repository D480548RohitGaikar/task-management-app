import taskModel from "../models/taskModel.js";
import userModel from "../models/userModel.js";

const addTask = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.user.id;
  const user = await userModel.find({ _id: userId });
  const newTask = new taskModel({
    title,
    description,
    completed: false,
    userId,
  });
  newTask
    .save()
    .then(() => {
      return res.status(200).json({ message: "Task added successfully" });
    })
    .catch((error) => {
      return res.status(500).json({ message: error.message });
    });
};

const getAllTask = (req, res) => {
  taskModel
    .find()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(501).json({ message: error.message }));
};

const removeTask = (req, res) => {
  const taskId = req.params.id;

  taskModel
    .findOneAndDelete({ _id: taskId, userId: req.user.id })
    .then((task) => {
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      return res.status(200).json({ message: "Task deleted successfully" });
    })
    .catch((error) => res.status(500).json({ message: error.message }));
};

const getTask = (req, res) => {
  const taskId = req.params.id;

  taskModel
    .findOne({ _id: taskId, userId: req.user.id })
    .then((task) => {
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      return res.status(200).json(task);
    })
    .catch((error) => res.status(500).json({ message: error.message }));
};

const editTask = (req, res) => {
  const taskId = req.params.id;
  const { title, description, completed } = req.body;

  taskModel
    .findOneAndUpdate(
      { _id: taskId, userId: req.user.id },
      { title, description, completed },
      { new: true }
    )
    .then((task) => {
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      return res
        .status(200)
        .json({ message: "Task updated successfully", task });
    })
    .catch((error) => res.status(500).json({ message: error.message }));
};

export { addTask, getAllTask, getTask, removeTask, editTask };
