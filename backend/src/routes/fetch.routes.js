import express from "express"
import { fetchRouter } from "../controllers/fetch.controller.js";

const router = express.Router();
router.post("/", fetchRouter);


router.use( async (err, _req, res, _next) => {
    console.log(err)
    res.status(400).send({err})
}) 

export default router
