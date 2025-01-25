import express from "express";
import "dotenv/config.js"
const app= express();
import  connectDB  from "./batabase/batabase.js";


connectDB();
app.get("/",(req,res)=>{
    res.send(" working")
})

export default app;