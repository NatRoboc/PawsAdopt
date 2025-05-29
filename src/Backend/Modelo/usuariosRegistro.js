import mongoose from 'mongoose';

const registroSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contrasena: { type: String, required: true },
  telefono: String,
  rutEmpresa: String,
  enlaceWeb: String,
}, { collection: 'registro' });


export default mongoose.model('Registro', registroSchema);