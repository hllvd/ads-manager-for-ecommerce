import express from "express"
import {createBusiness, getBusinesses, getBusinessFromId, deleteBusinessFromId} from "../controllers/business.controller.js";

const router = express.Router()

router.get("/", getBusinesses)
router.post("/", createBusiness)
router.get("/:bid", getBusinessFromId)
router.delete("/:bid", deleteBusinessFromId)

export default router