import express from "express"
import businessesRouter from "./src/routes/business.routes.js"


const app = express()
app.use(express.json())

app.use("/business", businessesRouter)

app.listen(3000, ()=>{
    /**
     * sudo lsof -i :3000
    *   kill -9 {PID}
     */
    console.log("server is up")
})
