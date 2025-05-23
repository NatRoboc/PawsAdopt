import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicio from './Inicio.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Profile from './Profile.jsx'
import Avistamientos from './Avistamientos.jsx'

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/mapa_avistamientos" element={<Avistamientos />} />

      </Routes>
    </Router>
  );
}

export default App;
