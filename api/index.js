import express from "express";
import userRoutes from "./routes/users.js"
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes)

app.listen(process.env.PORT || 8800);