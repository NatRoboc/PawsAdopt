import express from 'express';
import cors from 'cors';
import connectToServer from './connect.js';
import route from './usuariosRoutes.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

/*Rutas */
app.use('/api', route);

async function startServer() {
  await connectToServer();
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
  });
}

startServer();