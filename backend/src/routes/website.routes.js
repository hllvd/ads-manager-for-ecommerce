import express from "express"
import { createWebsite, getWebsites, getWebsite, deleteWebsite } from "../controllers/website.controller.js";

const router = express.Router();
router.get("/", getWebsites);
router.get("/:wid", getWebsite);
router.post("/", createWebsite);
router.delete("/:wid", deleteWebsite);

router.use( async (err, _req, res, _next) => {
    console.log(err)
    res.status(400).send({err})
}) 

export default router
