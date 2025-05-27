import React from "react";
import fotoP from "./assets/fotoPerfil.webp";
import { PiNotePencilBold } from "react-icons/pi";
import { NavbarSuperior, Footer } from "./Funciones_Interfaz.jsx";

function Profile() {
  return (
    <div>
      <header>
        <NavbarSuperior />
      </header>

      <main className="pt-[4rem] md:pt-[5rem]">
        <div className="flex min-h-screen bg-gray-100">
          {/* Sección izquierda */}
          <div className="w-1/3 flex flex-col items-center justify-center p-4 border-r border-gray-300">
            <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-transparent">
              <img
                src={fotoP}
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-medium">Nombre de usuario</span>
              <PiNotePencilBold className="text-lg cursor-pointer" />
            </div>
            <button className="mt-4 bg-orange-300 text-white py-2 px-4 rounded hover:bg-orange-400 transition">
              Subir imagen
            </button>
          </div>

          {/* Sección derecha */}
          <div className="w-2/3 p-6">
            <h2 className="text-xl font-bold mb-4">Describe tu perfil</h2>
            <form>
              <div className="mb-4">
                <label className="block font-medium mb-2">Correo:</label>
                <input
                  type="text"
                  placeholder="Correo"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300 bg-white"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-2">Contraseña:</label>
                <input
                  type="password"
                  placeholder="Ingrese nueva contraseña"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300 bg-white"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-2">
                  Nro de teléfono:
                </label>
                <input
                  type="text"
                  placeholder="Ingrese su número"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300 bg-white"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-2">Edad:</label>
                <input
                  type="number"
                  placeholder="Ingrese su edad"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300 bg-white"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-2">Sexo:</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300 bg-white">
                  <option>Femenino</option>
                  <option>Masculino</option>
                </select>
              </div>
              <button
                type="submit"
                className="mt-4 bg-orange-300 text-white py-2 px-4 rounded hover:bg-orange-400 transition"
              >
                Guardar información
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Profile;
