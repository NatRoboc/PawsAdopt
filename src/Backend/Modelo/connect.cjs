const {MongoClient} = require('mongodb');
require('dotenv').config({path: "./config.env"})


const db= process.env.ATLAS_URI
const client= new MongoClient(db)
/*
FUNCIÓN DE TESTING

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
*/

let database

module.exports={
    connectToServer:()=>{
        database= client.db("Usuarios")
    },
    getDB: () =>{
        return database
    }
}