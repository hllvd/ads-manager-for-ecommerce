
import {storageInstance, prepareSchema} from "./index.js";

const addNewBusiness = async (fields) => {
    const db = await storageInstance()
    const {id, data} = prepareSchema(db.data, 'businesses')
    db.data = data
    const currentObj = {...fields, id}
    console.log("db.data.businesses.data ", db.data.businesses.data);
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

export default { addNewBusiness, getBusinesses } 