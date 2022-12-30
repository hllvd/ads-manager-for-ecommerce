
import websitePersistence from "../persistence/website.persistence.js" 
const createWebsite = async ({businessId, fields}) => {
    const result = await websitePersistence.createAppend(businessId, fields)
    return result
}

export default {
    createWebsite
}