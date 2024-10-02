import express from "express";
import userRoutes from "./routes/users.js"
import cors from "cors";
import dotenv from "dotenv";

dotenv.config('porta:', process.env.PORT); 
console.log('Host:', process.env.MYSQL_HOST);
console.log('Host:', process.env.MYSQL_HOST);
console.log('User:', process.env.MYSQL_USER);
console.log('Password:', process.env.MYSQL_PASSWORD);
console.log('Port:', process.env.MYSQL_PORT);


const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes)

app.listen(process.env.PORT || 8800);