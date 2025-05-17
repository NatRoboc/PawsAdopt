import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {NavbarSuperior, ContenedorPrincipal, SidebarIzquierda, SidebarDerecha} from './Funciones_Interfaz.jsx';

function App() {
  return (
    <Router>
      <NavbarSuperior/>
      <ContenedorPrincipal/>
      <SidebarIzquierda/>
      <SidebarDerecha/>
    </Router>
  );
}

export default App;
