import express from "express";
import dotenv from "dotenv";
import { readdirSync } from "fs";
import database from "./database.js";
import routes from "./routes/video.route.js";

const app = express();
dotenv.config('');

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

database(MONGO_URL);
// console.log(routes());
app.use(routes());


app.listen(PORT,()=>{
  console.log(`Our app is listening on port 8080`);
})