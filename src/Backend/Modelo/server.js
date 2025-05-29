import express from 'express';
import cors from 'cors';
import connectToServer from './connect.js';
import usuariosRoutes from './usuariosRoutes.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/usuarios', usuariosRoutes);

async function startServer() {
  await connectToServer();
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
  });
}

startServer();
