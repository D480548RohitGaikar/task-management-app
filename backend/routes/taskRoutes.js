import express from "express";
import {
  addTask,
  getAllTask,
  getTask,
  removeTask,
  editTask,
} from "../controllers/taskController.js";
import requireAuth from "../middleware/requireAuth.js";
const router = express.Router();

router.post("/addTask", requireAuth, addTask);
router.get("/getAllTask", requireAuth, getAllTask);
router.get("/getTask/:id", requireAuth, getTask);
router.put("/editTask/:id", requireAuth, editTask);
router.delete("/removeTask/:id", requireAuth, removeTask);

export default router;
