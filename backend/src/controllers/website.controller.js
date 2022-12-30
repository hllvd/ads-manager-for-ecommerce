import websiteService from "../services/website.service.js";
import WebsiteModel from "../models/website.model.js";

const createWebsite = async (req, res, next) => {
    const businessId = req.info.bid;
    const body = req.body;
    let errors = [];
    const fields = new WebsiteModel({
        ...body
    },errors).stringify();
    try{
        if(errors.length > 0) throw errors
        res.send( await websiteService.createWebsite({businessId, fields:JSON.parse(fields)}) )
    }catch(e){
        console.log(e)
        next();
    }
}

export {
    createWebsite
}