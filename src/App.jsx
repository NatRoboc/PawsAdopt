import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/login">Iniciar Sesión</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>Hola Mundo</div>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
