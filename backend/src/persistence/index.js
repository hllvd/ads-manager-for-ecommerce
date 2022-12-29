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

function prepareSchema( data, schemaName ){
    data  = data || {} 
    data[schemaName]  = data[schemaName] || {}
    data[schemaName].data  = data[schemaName].data || []
    data[schemaName]._nextId  = (data[schemaName]._nextId) ? data[schemaName]._nextId : 0
    const id = data[schemaName]._nextId
    return {data, id}
}

export {storageInstance, prepareSchema} ;