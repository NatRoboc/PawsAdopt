import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicio from "./Inicio.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Profile from "./Profile.jsx";
import Avistamientos from "./Avistamientos.jsx";
import NewPet from "./NewPet.jsx";
import PetProfile from "./PetProfile.jsx";

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
