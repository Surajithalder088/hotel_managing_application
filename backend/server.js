import http from "http"
import app from "./app.js"

const server =http.createServer(app)


server.listen(7070,()=>{
    console.log(" runnig on port 7070");
    
})