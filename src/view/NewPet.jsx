import React from "react";
import { NavbarSuperior, Footer } from "../controller/Funciones_Interfaz.jsx";

function NewPet() {
  return (
    <div>
      <header>
        <NavbarSuperior />
      </header>
      <main className="pt-[4rem] md:pt-[5rem]">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-2xl font-bold mb-4">Registrar Mascota</h1>
          {/* Formulario */}
          <form className="bg-cyan-100 p-8 rounded shadow-md w-full max-w-2xl">
            <div className="mb-4">
              <label className="block font-medium mb-2">Nombre:</label>
              <input
                type="text"
                placeholder="Ingrese el nombre de la mascota"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300 bg-white"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">Foto:</label>
              <input
                type="file"
                accept="image/*"
                className="w-full px-3 py-2 border border-gray-300 rounded bg-white"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">Carácter:</label>
              <input
                type="text"
                placeholder="Ej: Juguetón, tranquilo, protector..."
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300 bg-white"
              />
            </div>
            {/* Edad */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Edad:</label>
              <input
                type="number"
                min="0"
                placeholder="Edad en años"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300 bg-white"
              />
            </div>
            {/* Vacunado, Castrado y Con chip */}
            <div className="mb-4 flex flex-wrap gap-6">
              <div>
                <label className="block font-medium mb-1">¿Vacunado?</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white">
                  <option value="">Seleccione</option>
                  <option value="si">Sí</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">¿Castrado?</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white">
                  <option value="">Seleccione</option>
                  <option value="si">Sí</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">¿Con chip?</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white">
                  <option value="">Seleccione</option>
                  <option value="si">Sí</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">Tamaño:</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white">
                <option value="">Seleccione el tamaño</option>
                <option value="pequeño">Pequeño</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
              </select>
            </div>
            {/* Descripción */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Descripción:</label>
              <textarea
                placeholder="Descripción de la mascota"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300 bg-white"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-300 text-white py-2 px-4 rounded hover:bg-orange-400 transition"
            >
              Registrar Mascota
            </button>
          </form>
        </div>

        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default NewPet;
