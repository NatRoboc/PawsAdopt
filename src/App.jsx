import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";

function App() {
  return (
    <Router>
      {/* Navbar fijo */}
      <nav className="fixed top-0 left-0 w-full bg-pink-300 text-white shadow-md z-10 p-4 flex justify-between items-center">
        <div>
          <Link to="/" className="mr-4">
            Inicio
          </Link>
        </div>
        <div>
          <Link to="/login" className="mr-4">
            Iniciar Sesión
          </Link>
          <Link to="/profile" className="mr-4">
            Perfil
          </Link>
        </div>
      </nav>

      {/* Contenedor principal con padding superior */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<div>Hola Mundo</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
