import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import TaskRouter from "./routes/api.route.js";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api", TaskRouter);

app.listen(port, () => {
  connectDB();
  console.log(`Server running on port: ${port}`);
});
