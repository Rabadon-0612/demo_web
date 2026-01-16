import express from "express";
import { createTask, deleteTask, getAllTasks, updateTask } from "../controller/tasksController.js";
const router = express.Router();
export default router;



router.get("/", getAllTasks);
router.post("/", createTask);

router.put("/", updateTask);

router.delete("/", deleteTask);
