import express from "express";
import { addTask, getTasks } from "../controllers/task.controller.js";

const router = express.Router();

router.post("/new", addTask);
router.get("/all", getTasks);

export default router;
