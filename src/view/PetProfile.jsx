import React from "react";
import { NavbarSuperior, Footer } from "../controller/Funciones_Interfaz.jsx";

function PetProfile() {
  return (
    <div>
      <header>
        <NavbarSuperior />
      </header>
      <main className="pt-[4rem] md:pt-[5rem]">
        <div className="flex flex-col items-center justify-start min-h-screen">
          {/* Imagen centrada arriba */}
          <img
            src={"https://placedog.net/500/280"}
            alt="Mascota"
            className="w-60 h-60 rounded-full object-cover border-4 border-pink-200 shadow-md mt-8"
          />
          {/* Texto después de la imagen */}
          <div className="mt-6 text-center">
            <label className="font-bold">Nombre: </label>
            <label>Max</label>
          </div>
          <div className="mt-3 text-center">
            <label className="font-bold">Carácter: </label>
            <label>Timido y Cariñoso</label>
          </div>
          <div className="mt-3 text-center">
            <label className="font-bold">Edad: </label>
            <label>2 años</label>
          </div>
          <div className="mt-3 text-center">
            <label className="font-bold">¿Vacunado? </label>
            <label>Si</label>
          </div>
          <div className="mt-3 text-center">
            <label className="font-bold">¿Castrado? </label>
            <label>No</label>
          </div>
          <div className="mt-3 text-center">
            <label className="font-bold">¿Tiene Chip? </label>
            <label>No</label>
          </div>
          <div className="mt-3 text-center">
            <label className="font-bold">Tamaño: </label>
            <label>Grande</label>
            <div className="mt-3 text-center">
              <label className="font-bold">Descripción: </label>
              <label>
                Perro timido y cariñoso, busca un hogar. Hablarme por WhatsApp
                +56 912345678
              </label>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PetProfile;
