
import websitePersistence from "../persistence/website.persistence.js" 

const createWebsite = async ({businessId, fields}) => {
    const result = await websitePersistence.createAppend(businessId, fields)
    return result
}
const getWebsites = async (businessId) => {
    return await websitePersistence.getAll(businessId);
}
const getWebsite = async (businessId, websiteId) => {
    const business = await websitePersistence.getAll(businessId)
    return business.find( obj => obj.id == websiteId)
}
const removeWebsite = async (businessId, websiteId) => {
    return await websitePersistence.remove(businessId, websiteId)
}

export default {
    createWebsite,
    getWebsites,
    getWebsite,
    removeWebsite
}