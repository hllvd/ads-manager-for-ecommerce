
import productsService from "../services/products.service.js";
import productsModel from "../models/products.model.js";

const getProducts = async (req, res, next) => {
    try{
        const businessId = Number(req.info.bid);
        res.send( await ProductService.getProducts(businessId))
    }catch(message){
        next({message})
    }
}
// const getProductFromId = async (req, res, next) => {
//     try{
//         const businessId = Number(req.info.bid);
//         const websiteId = Number(req.params.wid);
//         res.send( await websiteService.getWebsite(businessId, websiteId))
//     }catch(message){
//         next({message})
//     }
// }

export {
    getProducts
}