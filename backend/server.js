import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/cruiseDB")
.then(()=> console.log("MongoDB Connected"));

app.listen(5000, ()=>{
  console.log("Server running on port http://localhost:5000");
});
