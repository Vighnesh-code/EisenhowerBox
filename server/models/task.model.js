import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    important: {
      type: Boolean,
      default: true,
    },
    urgent: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const taskModel = mongoose.model("task", taskSchema);
