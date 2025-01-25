import express from "express";
import "dotenv/config.js"
const app= express();
import cors from "cors"
import cookieParser from "cookie-parser";
import  connectDB  from "./batabase/batabase.js";
import customerRoute from "./routes/customer.js"

connectDB();



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
    origin:"*",
    credentials:true,
    methods:"GET,POST,PUT,DELETE"
}))
app.use('/api/customer',customerRoute)
app.get("/",(req,res)=>{
    res.send(" working")
})

export default app;