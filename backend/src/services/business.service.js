import persistence from "../persistence/business.persistence.js"

const createBusiness = async ( business ) => {
    const businessCreated = await persistence.addNewBusiness(business)
    console.log("businessCreated",businessCreated)
    return businessCreated;
}

const getBusinesses = async () => {
    return persistence.getBusinesses()
}

export default{
    createBusiness,
    getBusinesses
}
