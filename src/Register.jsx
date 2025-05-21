import React, { useState } from "react";
import { NavbarSuperior, Footer} from './Funciones_Interfaz.jsx';

function Register() {
  const [isFoundation, setIsFoundation] = useState(false);

  const handleFoundationChange = (e) => {
    setIsFoundation(e.target.checked);
  };

  return (
    <div>
      <header>
        <NavbarSuperior/>
      </header>

      <main className="pt-[4rem] md:pt-[5rem]">
        <div className="flex flex-col items-center justify-center min-h-screen ">
          <h1 className="text-2xl font-bold mb-4">Registro</h1>
          <form className="bg-cyan-100 p-6 rounded shadow-md w-80">
            <div className="mb-4">
              <label className="block font-medium mb-2">Usuario:</label>
              <input
                type="text"
                placeholder="Ingrese su usuario"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300 bg-white"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">Correo:</label>
              <input
                type="email"
                placeholder="Ingrese su correo"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300 bg-white"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">Contraseña:</label>
              <input
                type="password"
                placeholder="Ingrese su contraseña"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300 bg-white"
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={handleFoundationChange}
                />
                ¿Es una fundación?
              </label>
            </div>

            {/* Formulario adicional para fundaciones */}
            {isFoundation && (
              <div className="bg-pink-300 p-4 rounded shadow-md mb-4">
                <div className="mb-4">
                  <label className="block font-medium mb-2">
                    Número de teléfono:
                  </label>
                  <input
                    type="text"
                    placeholder="Ingrese el número de teléfono"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-cyan-100 bg-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium mb-2">
                    RUT de la empresa:
                  </label>
                  <input
                    type="text"
                    placeholder="Ingrese el RUT"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-cyan-100 bg-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium mb-2">
                    Enlace de la página web:
                  </label>
                  <input
                    type="url"
                    placeholder="Ingrese el enlace"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-cyan-100 bg-white"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-orange-300 text-white py-2 px-4 rounded hover:bg-orange-400 transition"
            >
              Registrarse
            </button>
          </form>
        </div>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>


  );
}

export default Register;
