
import businessService from "../services/business.service.js";
import BusinessModel from "../models/business.model.js";

const createBusiness = async (req, res, _next) => {
    const body = req.body;
    const business = new BusinessModel({
        ...body
    }).stringify();
    const r = await businessService.createBusiness(JSON.parse(business));
    await res.send(r)
}
const getBusinesses= async (_req, res, _next) => {
    const business = await businessService.getBusinesses();
    res.send(business)
} 
const getBusinessFromId = async (req, res, _next) => {
    const bid = req.params.bid
    const business = await businessService.getBusinessFromId(bid);
    res.send(business)
}

const deleteBusinessFromId = async (req, res, _next) => {
    const bid = req.params.bid
    const business = await businessService.deleteBusinessFromId(bid);
    res.send(business)
}

export {createBusiness, getBusinesses, getBusinessFromId, deleteBusinessFromId}