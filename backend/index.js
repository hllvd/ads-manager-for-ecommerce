import express from "express"
import businessesRouter from "./src/routes/business.routes.js"
import websiteRouter from "./src/routes/website.routes.js"
import fetchRouter from "./src/routes/fetch.routes.js"
import cors from 'cors'


const app = express()
app.use(cors())
app.use(express.json())
app.param('bid', (req, res, next)=>{
    req.info = req.info || {}
    req.info.bid = req.params.bid
    next();
})
app.param('method', (req, res, next)=>{
    req.info = req.info || {}
    req.info.method = req.params.method
    console.log(req.info)
    next();
})

app.use("/business", businessesRouter)
app.use("/business/:bid/website", websiteRouter)
app.use("/fetch/:method", fetchRouter)
app.use("/fetch", fetchRouter)



app.listen(3000, ()=>{
    /**
     * sudo lsof -i :3000
    *   kill -9 {PID}
     */
    console.log("server is up")
})
