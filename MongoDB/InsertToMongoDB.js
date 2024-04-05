const { MongoClient}=require('mongodb');
const uri='mongodb://localhost/27017';
const client = new MongoClient(uri);

async function listDatabases(){
    try{
        await client.connect();
        console.log('Connected to MongoDB');    // Connected to MongoDB
        const db=client.db('grvDB');
        const collection=db.collection('Students_Details');
        await collection.insertOne({name: "AVI", age: 21});
        console.log("document inserted successfully");
    }catch(error){
        console.error("error connecting to MongoDB", error);
    }finally{
        await client.close();
    }
}
listDatabases();