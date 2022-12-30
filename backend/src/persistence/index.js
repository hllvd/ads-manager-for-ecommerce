import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

async function storageInstance(){
    // File path
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const file = join(__dirname, 'db.json') 
    // Configure lowdb to write to JSONFile
    const adapter = new JSONFile(file)
    const db = new Low(adapter)

    // Read data from JSON file, this will set db.data content
    await db.read()
    return await db;
}

function prepareSchema( obj, schemaName ){
    obj  = obj || {} 
    obj[schemaName]  = obj[schemaName] || {}
    obj[schemaName].data  = obj[schemaName].data || []
    obj[schemaName]._nextId  = (obj[schemaName]._nextId) ? obj[schemaName]._nextId : 0
    const id = obj[schemaName]._nextId
    const _nextId = ++obj[schemaName]._nextId
    return {obj, id, _nextId}
}
function incrementID(data){

}


export {storageInstance, prepareSchema} ;