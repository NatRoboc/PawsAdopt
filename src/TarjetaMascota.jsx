import React from "react";

function TarjetaMascota({ foto, nombre, descripcion }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-72 flex flex-col items-center">
      <img
        src={foto}
        alt={nombre}
        className="w-32 h-32 object-cover rounded-full mb-4 border-2 border-pink-200"
      />
      <h3 className="text-lg font-bold mb-2">{nombre}</h3>
      <p className="text-gray-700 text-center">{descripcion}</p>
    </div>
  );
}

export default TarjetaMascota;
