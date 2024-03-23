import express from "express";
import dotenv from "dotenv";
import database from "./database.js";

const app = express();
dotenv.config('');

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

database(MONGO_URL);


app.listen(PORT,()=>{
  console.log(`Our app is listening on port 8080`);
})