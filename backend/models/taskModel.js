import mongoose from "mongoose";
const taskSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: String, required: true },
    completed: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const taskModel = mongoose.model("Task", taskSchema);
export default taskModel;
