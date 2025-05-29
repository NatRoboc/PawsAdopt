import React from "react";
import { Link } from "react-router-dom";
import { NavbarSuperior, Footer } from "../controller/Funciones_Interfaz.jsx";

function Login() {
  return (
    <div>
      <header>
        <NavbarSuperior />
      </header>

      <main className="pt-[4rem] md:pt-[5rem]">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-2xl font-bold mb-6">Inicio de Sesión</h1>
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
              <label className="block font-medium mb-2">Contraseña:</label>
              <input
                type="password"
                placeholder="Ingrese su contraseña"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300 bg-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-300 text-white py-2 px-4 rounded hover:bg-orange-400 transition"
            >
              Iniciar Sesión
            </button>
          </form>
          <p className="mt-4">
            ¿Aún no te registras?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Login;
