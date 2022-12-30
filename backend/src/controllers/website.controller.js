import websiteService from "../services/website.service.js";
import WebsiteModel from "../models/website.model.js";

const getWebsites = async (req, res, next) => {
    try{
        const businessId = req.info.bid;
        res.send( await websiteService.getWebsites(businessId))
    }catch(message){
        next({message})
    }
}
const getWebsite = async (req, res, next) => {
    try{
        const businessId = req.info.bid;
        const websiteId = req.params.wid;
        res.send( await websiteService.getWebsite(businessId, websiteId))
    }catch(message){
        next({message})
    }
}
const deleteWebsite = async (req, res, next) => {
    try{
        const businessId = req.info.bid;
        const websiteId = req.params.wid;
        res.send(await websiteService.removeWebsite(businessId, websiteId))
    }catch(message){
        next({message})
    }
}

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
    }catch(message){
        next({message})
    }
}

export {
    createWebsite,
    getWebsites,
    getWebsite,
    deleteWebsite
}