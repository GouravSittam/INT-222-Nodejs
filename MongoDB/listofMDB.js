const { MongoClient}=require('mongodb');
const uri='mongodb://localhost/27017';
const client = new MongoClient(uri);

async function listDatabases(){
    try{
        await client.connect();
        console.log('Connected to MongoDB');    // Connected to MongoDB
        const adminDB=client.db().admin();
        const databases=await adminDB.listDatabases();
        console.log("list of databases: ",databases.databases);
    }catch(error){
        console.error("error connecting to MongoDB", error);
    }finally{
        await client.close();
    }
}
listDatabases();