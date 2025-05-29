import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

const db = process.env.ATLAS_URI;
const client = new MongoClient(db);

let database;

export default {
  connectToServer: () => {
    database = client.db("Usuarios");
  },
  getDB: () => {
    return database;
  },
};

console.log("Conectado a la base de datos Usuarios");
