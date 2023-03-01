

const getProducts = async (businessId) => {
    return await websitePersistence.getAll(businessId);
}

const getProductFromId = async (businessId, websiteId) => {
    const business = await websitePersistence.getAll(businessId)
    const result = business.find( obj => obj.id == websiteId)
    if (!result) throw 'website id not found'
    return result
}


export default {
    getProducts,
    getProductFromId
}