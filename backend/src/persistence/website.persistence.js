
import {storageInstance, prepareSchema} from "./index.js";


const createAppend = async(businessId, fields) => {
    const db = await storageInstance()
    const businessIndex = db.data.businesses.data.findIndex( obj => obj.id == businessId);
    if (businessIndex === -1) throw 'register not found'
    let business = await db.data.businesses.data[businessIndex]
    const {id, obj} = prepareSchema(business, 'website')
    const currentObj = {...fields, bid:businessId, id}
    business.website.data.push(currentObj)
    await db.write()
    return currentObj
}

const getAll = async (businessId) => {
    const db = await storageInstance()
    const businessIndex = db.data.businesses.data.findIndex( obj => obj.id == businessId);
    if (businessIndex === -1) throw 'register not found'
    let business = await db.data.businesses.data[businessIndex]
    const {id, obj} = prepareSchema(business, 'website')
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
    remove
}