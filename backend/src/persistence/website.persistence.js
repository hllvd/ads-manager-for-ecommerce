
import {storageInstance, prepareSchema} from "./index.js";


const createAppend = async(businessId, fields) => {
    const db = await storageInstance()
    const businessIndex = db.data.businesses.data.findIndex( obj => obj.id == businessId);
    if (businessIndex === -1) throw 'register not found'
    let business = await db.data.businesses.data[businessIndex]
    const {id, obj} = prepareSchema(business, 'website')
    const currentObj = {...fields, bid:Number(businessId), id}
    business.website.data.push(currentObj)
    await db.write()
    return currentObj
}

const replace = async(businessId, websiteId, fields) => {
    const db = await storageInstance()
    const businessIndex = db.data.businesses.data.findIndex( obj => obj.id == businessId);
    if (businessIndex === -1) throw 'business not found'
    let businessData = await db.data.businesses.data[businessIndex]
    prepareSchema(businessData, 'website', false)
    const currentObj = {...fields, bid:businessId, id:websiteId}
    const websiteIndex = businessData.website.data.findIndex( obj => obj.id == websiteId)
    if (websiteIndex === -1) throw 'website not found'
    businessData.website.data[websiteIndex] = currentObj
    await db.write()
    return currentObj
}

const getAll = async (businessId) => {
    const db = await storageInstance()
    const businessIndex = db.data.businesses.data.findIndex( obj => obj.id == businessId);
    if (businessIndex === -1) throw 'business not found'
    let business = await db.data.businesses.data[businessIndex]
    prepareSchema(business, 'website')
    return await business.website.data
}

const remove = async (businessId, websiteId) => {
    const db = await storageInstance()
    const businessIndex = db.data.businesses.data.findIndex( obj => obj.id == businessId);
    if (businessIndex === -1) throw 'business not found'
    if ( db.data?.businesses?.data[businessIndex] == false) return false;
    const lengthBefore =  db.data?.businesses?.data[businessIndex].website.data.length;
    db.data.businesses.data[businessIndex].website.data =  db.data.businesses.data[businessIndex].website.data.filter(obj => obj.id != websiteId)
    await db.write()
    return  db.data.businesses.data[businessIndex].website.data.length < lengthBefore
}

export default{
    createAppend,
    getAll,
    remove,
    replace
}