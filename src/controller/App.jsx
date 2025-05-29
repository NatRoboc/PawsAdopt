import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicio from "../view/Inicio.jsx";
import Login from "../view/Login.jsx";
import Register from "../view/Register.jsx";
import Profile from "../view/Profile.jsx";
import Avistamientos from "../view/Avistamientos.jsx";
import NewPet from "../view/NewPet.jsx";
import PetProfile from "../view/PetProfile.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mapa_avistamientos" element={<Avistamientos />} />
        <Route path="/new_pet" element={<NewPet />} />
        <Route path="/pet_profile" element={<PetProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
