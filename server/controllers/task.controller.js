import { taskModel } from "../models/task.model.js";

export const addTask = async (req, res) => {
  try {
    const newTask = await taskModel.create(req.body);
    res.status(201).json({ newData: newTask });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
