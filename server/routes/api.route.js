import express from "express";
import {
  addTask,
  deleteTask,
  getTasks,
} from "../controllers/task.controller.js";

const router = express.Router();

router.post("/new", addTask);
router.get("/all", getTasks);
router.delete("/delete/:id", deleteTask);

export default router;
