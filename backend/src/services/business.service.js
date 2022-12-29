import persistence from "../persistence/business.persistence.js"

const createBusiness = async ( business ) => {
    const businessCreated = await persistence.addNewBusiness(business)
    return businessCreated;
}

const getBusinesses = async () => {
    return await persistence.getBusinesses()
}
const getBusinessFromId = async (id) => {
    const businesses = await persistence.getBusinesses();
    return businesses.filter(obj => obj.id == id).pop();
}
const deleteBusinessFromId = async (id) => {
    const r = await persistence.deleteBusinessFromId(id);
    return r
} 

export default{
    createBusiness,
    getBusinesses,
    getBusinessFromId,
    deleteBusinessFromId
}
