import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import foto_perfil from "./assets/fotoPerfil.webp";
import foto_mapa from "./assets/mapa.png";
import TarjetaMascota from "./TarjetaMascota";

const menuItems = [
  { label: "Amigos" },
  { label: "En tendencia" },
  { label: "Avisos" },
  { label: "Tienda" },
  { label: "Foro" },
];

function NavbarSuperior() {
  return (
    <header className="grid grid-cols-[auto_auto_auto_auto] items-center gap-6 bg-pink-300 p-4 min-h-[4rem] md:min-h-[5rem] w-full fixed top-0 z-100">
      {/*Logo de PawsAdopt.*/}
      <div className="Logo">
        <Link to="/" className="block">
          {" "}
          [LogoPawsAdopt]{" "}
        </Link>
      </div>

      {/*Casilla para buscar.*/}
      <div className="Buscador">
        <form>
          <div className="shadow-sm">
            <input
              type="search"
              placeholder="Buscar..."
              className="md:text-slate-500 w-full p-2 rounded bg-pink-50"
            ></input>
          </div>
        </form>
      </div>

      {/*Esta lista son los elementos del menú de navegación.*/}
      <div className="MenuNavbar">
        {/*Flex space-x-3 hace que cada item de la lista tenga una distancia horizontal entre sí de 3.*/}
        <ul className="flex flex-row justify-center space-x-3">
          {menuItems.map((item, index) => {
            return (
              <li
                key={index}
                className="inline-block px-6 py-2 bg-pink-400 hover:bg-pink-200 rounded-md duration-300 cursor-pointer shadow-sm"
              >
                <p>{item.label}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="BotonSesion">
        <div className="inline-block p-4 py-2 bg-pink-400 hover:bg-pink-200 rounded-md duration-300 cursor-default shadow-sm">
          <Link to="/login" className="">
            Iniciar sesión
          </Link>
        </div>
      </div>
    </header>
  );
}

function ContenedorPrincipal() {
  return (
    <div className="h-full p-4 w-full">
      <div>
        <h1 className="text-2xl font-bold">¡Bienvenido a PawsAdopt!</h1>
      </div>
      <div className="mt-2 mb-4">Explora adopciones, foros y más.</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/pet_profile">
          <TarjetaMascota
            foto="https://placecats.com/300/200"
            nombre="Pancho"
            descripcion="Gato juguetón y cariñoso, busca un hogar."
          />
        </Link>
        <Link to="/pet_profile">
          <TarjetaMascota
            foto="https://placecats.com/300/200"
            nombre="Pancho"
            descripcion="Gato juguetón y cariñoso, busca un hogar."
          />
        </Link>
        <Link to="/pet_profile">
          <TarjetaMascota
            foto="https://placecats.com/300/200"
            nombre="Pancho"
            descripcion="Gato juguetón y cariñoso, busca un hogar."
          />
        </Link>
        <Link to="/pet_profile">
          <TarjetaMascota
            foto="https://placedog.net/500/280"
            nombre="Max"
            descripcion="Perro timido y cariñoso, busca un hogar."
          />
        </Link>
        <Link to="/pet_profile">
          <TarjetaMascota
            foto="https://placedog.net/500/280"
            nombre="Max"
            descripcion="Perro timido y cariñoso, busca un hogar."
          />
        </Link>
        <Link to="/pet_profile">
          <TarjetaMascota
            foto="https://placedog.net/500/280"
            nombre="Max"
            descripcion="Perro timido y cariñoso, busca un hogar."
          />
        </Link>
      </div>
    </div>
  );
}

const menuCategorias = [
  { label: "Perros en adopción" },
  { label: "Gatos en adopción" },
  { label: "Usuarios populares" },
  { label: "Tenencia responsable" },
  { label: "Fundaciones registradas" },
];

function SidebarIzquierda() {
  return (
    <nav className="grid grid-rows-[10%_auto] h-full p-4 w-full bg-sky-100">
      <div className="flex justify-center items-center row-start-1 row-end-2 col-span-full mb-4">
        <h1 className="text-2xl text-black font-bold px-4 py-6">Categorías</h1>
      </div>

      <div className="flex justify-center row-start-2 row-end-3 col-span-full mb-4">
        <ul>
          {menuCategorias.map((item, index) => {
            return (
              <li
                key={index}
                className="block items-center px-6 py-2 text-lg hover:bg-sky-200 rounded duration-300 cursor-pointer shadow-sm"
              >
                <p>{item.label}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

const menuUsuario = [
  { label: "Notificaciones" },
  { label: "Amigos" },
  { label: "Buzón" },
  { label: "Publicar Mascota" },
];

function SidebarDerecha() {
  return (
    <nav className="grid grid-rows-[9%_auto_auto_auto_auto] p-4 h-full bg-sky-100 w-full">
      <div className="flex justify-center items-center row-start-1 row-end-2 col-span-full mb-4 px-3 py-2 bg-pink-400 hover:bg-pink-200 rounded-md duration-300 cursor-pointer shadow-sm">
        <Link to="/profile" className="block text-xl">
          Perfil
        </Link>
      </div>

      <div className="justify-self-center self-center row-start-2 row-end-3 col-span-full w-24 h-24 rounded overflow-hidden border-2">
        <img src={foto_perfil} className="w-full h-full object-cover"></img>
      </div>

      <div className="row-start-3 row-end-4 col-span-full">
        <ul>
          {menuUsuario.map((item, index) => {
            return (
              <li
                key={index}
                className="block items-center gap-6 px-6 py-2 text-lg hover:bg-sky-200 rounded duration-300 cursor-pointer shadow-sm"
              >
                {item.label === "Publicar Mascota" ? (
                  <Link to="/new_pet" className="block">
                    {item.label}
                  </Link>
                ) : (
                  <p>{item.label}</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <p className="flex justify-center py-2">Avistamientos en tu zona</p>
        <div className="w-full h-full object-cover cursor-pointer">
          <Link to="/mapa_avistamientos" className="">
            <img src={foto_mapa}></img>
          </Link>
        </div>
      </div>
    </nav>
  );
}

const menuFooter = [
  { label: "Tus datos" },
  { label: "Políticas" },
  { label: "Misión" },
  { label: "Empleo" },
  { label: "FAQ" },
  { label: "Accesibilidad" },
  { label: "Ayuda" },
];
function Footer() {
  return (
    <footer className="grid grid-cols-[200px_auto] items-center gap-6 bg-pink-300 p-4 min-h-[2rem] md:min-h-[3.5rem] 100dvh">
      <div className="inline-block items-center px-3 py-2 bg-pink-400 hover:bg-pink-200 rounded-md duration-300 cursor-pointer shadow-sm">
        <p>Acerca de...</p>
      </div>

      <div className="flex flex-row justify-center">
        <ul className="flex justify-center items-center gap-3">
          {menuFooter.map((item, index) => {
            return (
              <li
                key={index}
                className="p-4 px-3 py-2 bg-pink-400 hover:bg-pink-200 rounded-md duration-300 cursor-pointer shadow-sm"
              >
                <p>{item.label}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}

export { NavbarSuperior };
export { ContenedorPrincipal };
export { SidebarIzquierda };
export { SidebarDerecha };
export { Footer };
