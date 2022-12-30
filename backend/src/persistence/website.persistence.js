
import {storageInstance, prepareSchema} from "./index.js";

const createAppend = async(businessId, fields) => {
    const db = await storageInstance()
    const businessIndex = db.data.businesses.data.findIndex( obj => obj.id == businessId);
    let business = await db.data.businesses.data[businessIndex]
    const {id, obj} = prepareSchema(business, 'website')
    const currentObj = {...fields, bid:businessId, id}
    business.website.data.push(currentObj)
    await db.write()
    return currentObj
}

export default{
    createAppend
}