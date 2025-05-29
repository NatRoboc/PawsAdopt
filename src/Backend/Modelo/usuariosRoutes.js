import express from 'express';
import {registrarUsuario} from "../Controlador/usuariosController.js";

const route= express.Router();

route.post("/register", registrarUsuario);

export default route;
