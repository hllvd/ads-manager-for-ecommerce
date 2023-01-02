
import websitePersistence from "../persistence/website.persistence.js" 

const createWebsite = async ({businessId, fields}) => {
    const result = await websitePersistence.createAppend(businessId, fields)
    return result
}
const getWebsites = async (businessId) => {
    return await websitePersistence.getAll(businessId);
}

const editWebsite = async (businessId, websiteId, fields) => {
    const a = await websitePersistence.replace(businessId, websiteId, fields);
    return a
}
const getWebsite = async (businessId, websiteId) => {
    const business = await websitePersistence.getAll(businessId)
    const result = business.find( obj => obj.id == websiteId)
    if (!result) throw 'website id not found'
    return result
}
const removeWebsite = async (businessId, websiteId) => {
    return await websitePersistence.remove(businessId, websiteId)
}

export default {
    createWebsite,
    getWebsites,
    getWebsite,
    removeWebsite,
    editWebsite
}