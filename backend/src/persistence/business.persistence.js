
import {storageInstance, prepareSchema} from "./index.js";

const addNewBusiness = async (fields) => {
    const db = await storageInstance()
    const {id, data} = prepareSchema(db.data, 'businesses')
    db.data = data
    const currentObj = {...fields, id}
    db.data.businesses.data.push(currentObj)
    db.data.businesses._nextId++
    await db.write()
    return await currentObj
}

const getBusinesses = async () => {
    const db = await storageInstance()
    prepareSchema(db.data, 'businesses')
    return await db.data.businesses.data                                                              
}

const deleteBusinessFromId = async (id) => {
    const db = await storageInstance()
    if ( db.data?.businesses?.data == false) return false;
    const lengthBefore = db.data.businesses.data.length;
    db.data.businesses.data = db.data.businesses.data.filter(obj => obj.id != id)
    await db.write()
    return db.data.businesses.data.length < lengthBefore
}

export default { addNewBusiness, getBusinesses, deleteBusinessFromId} 