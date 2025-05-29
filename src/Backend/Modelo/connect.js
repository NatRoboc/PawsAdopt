import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, 'config.env') });

const dbURI = process.env.ATLAS_URI;

console.log("Mongo URI cargada:", dbURI); // para verificar

async function connectToServer() {
  try {
    if (!dbURI) {
      throw new Error('La variable ATLAS_URI no está definida');
    }

    await mongoose.connect(dbURI);  // Aquí falta la conexión real
    console.log('Conectado a MongoDB con Mongoose');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error);
  }
}

export default connectToServer;
