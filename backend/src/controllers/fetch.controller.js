import service from "../services/fetch.service.js";

const fetchRouter = async (req, res, next) => {
    try{
        const method =  req.info.method
        const options = req.body
        options.method = method 
        res.send( await service.fetchGetService(options) )
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
    fetchRouter
}