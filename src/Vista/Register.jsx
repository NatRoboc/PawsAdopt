import React, { useState } from "react";
import { NavbarSuperior, Footer } from './Funciones_Interfaz.jsx';

function Register() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contrasena: "",
    telefono: "",
    rutEmpresa: "",
    enlaceWeb: "",
  });

  const [isFoundation, setIsFoundation] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMensaje("Usuario registrado con éxito.");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        setMensaje(data.message || data.error || "Error en el registro.");
      }
    } catch (error) {
      setMensaje("Error de conexión con el servidor.");
    }
  };

  const handleFoundationChange = (e) => {
    setIsFoundation(e.target.checked);
    // Si es fundación, puedes limpiar o ajustar formData si quieres
  };

  return (
    <div>
      <header>
        <NavbarSuperior />
      </header>

      <main className="pt-[4rem] md:pt-[5rem]">
        <div className="flex flex-col items-center justify-center min-h-screen ">
          <h1 className="text-2xl font-bold mb-4">Registro</h1>
          <form
            className="bg-cyan-100 p-6 rounded shadow-md w-80"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block font-medium mb-2">Nombre de usuario:</label>
              <input
                type="text"
                name="nombre"
                placeholder="Ingrese su usuario"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300 bg-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">Correo:</label>
              <input
                type="email"
                name="correo"
                placeholder="Ingrese su correo"
                value={formData.correo}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300 bg-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">Contraseña:</label>
              <input
                type="password"
                name="contrasena"
                placeholder="Ingrese su contraseña"
                value={formData.contrasena}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300 bg-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={isFoundation}
                  onChange={handleFoundationChange}
                />
                ¿Es una fundación?
              </label>
            </div>

            {/* Campos adicionales para fundaciones */}
            {isFoundation && (
              <div className="bg-pink-300 p-4 rounded shadow-md mb-4">
                <div className="mb-4">
                  <label className="block font-medium mb-2">
                    Número de teléfono:
                  </label>
                  <input
                    type="text"
                    name="telefono"
                    placeholder="Ingrese el número de teléfono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-cyan-100 bg-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium mb-2">
                    RUT de la empresa:
                  </label>
                  <input
                    type="text"
                    name="rutEmpresa"
                    placeholder="Ingrese el RUT"
                    value={formData.rutEmpresa}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-cyan-100 bg-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium mb-2">
                    Enlace de la página web:
                  </label>
                  <input
                    type="url"
                    name="enlaceWeb"
                    placeholder="Ingrese el enlace"
                    value={formData.enlaceWeb}
                    onChange={handleChange}
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

          {/* Mostrar mensaje */}
          {mensaje && (
            <p className="mt-4 text-center text-red-600 font-semibold">{mensaje}</p>
          )}
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Register;