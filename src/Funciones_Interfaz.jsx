import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";

const menuItems=[
    {label:"Amigos"},
    {label:"En tendencia"},
    {label: "Avisos"},
    {label: "Tienda"},
    {label: "Foro"}
]

function NavbarSuperior(){
    return(
        <nav className="fixed top-0 w-full mx-auto h-20 bg-pink-300 text-white text-xl shadow-md z-10 p-4 flex justify-between items-center">

            {/*Logo de PawsAdopt.*/}
            <div className="mr-4">
                <Link to="/" className="mr-4"> [LogoPawsAdopt] </Link>
            </div>

            {/*Casilla para buscar.*/}
            <div className="flex items-center gap-x-5">
                <div className="relative  md:w-64 mx-auto">
                    <form>
                        <div className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
                            <input type="search" placeholder="Buscar..." className="md:text-slate-500 w-full p-2 rounded bg-pink-50"></input>
                        </div>
                    </form>
                </div>
            </div>

            {/*Esta lista son los elementos del menú de navegación.*/}
            <div>
                {/*Flex space-x-3 hace que cada item de la lista tenga una distancia horizontal entre sí de 3.*/}
                <ul className="flex space-x-3 mr-4">
                    {
                        menuItems.map((item, index) => {
                            return (
                                <li key={index} className="px-3 py-2 bg-pink-400 hover:bg-pink-200 rounded-md duration-300 cursor-pointer shadow-sm overflow-hidden">
                                    <p>{item.label}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            
            

            <div className="flex items-center space-x-4">
                <div className= "px-3 py-2 bg-pink-400 hover:bg-pink-200 rounded-md duration-300 cursor-default shadow-sm overflow-hidden">
                    <Link to="/login">Iniciar sesión</Link>
                </div>
            </div>

        </nav>
    );
}

function ContenedorPrincipal(){
    return(
        <div className="">
            <Routes>
                <Route path="/" element={<div>Hola Mundo</div>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
      </div>
    );
}

const menuCategorias=[
    {label:"Perros en adopción"},
    {label:"Gatos en adopción"},
    {label: "Usuarios populares"},
    {label: "Tenencia responsable"},
    {label: "Fundaciones registradas"}
]

function SidebarIzquierda(){
    return(
        <div className="fixed flex h-full w-70 bg-sky-100 h-full inline-block w-6 h-6 mr-2 mt-2">
            <div>
                <h1 className="flex justify-center text-2xl text-black font-bold px-4 py-6">Categorías</h1>
            </div>
            
            <div>
                <ul>
                    {
                        menuCategorias.map((item, index)=> {
                            return(
                                <li key={index} className="px-6 py-2 text-lg hover:bg-sky-200 rounded duration-300 cursor-pointer shadow-sm">
                                    <p>{item.label}</p>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

const menuUsuario=[
    {label:"Notificaciones"},
    {label:"Amigos"},
    {label:"Buzón"}
]

function SidebarDerecha(){
    return(
        <div className="gap-y-26 fixed right-0 h-full w-70 bg-sky-100 h-full inline-block w-6 h-6 mr-2 mt-2">

            <div className="px-3 py-2 bg-pink-400 hover:bg-pink-200 rounded-md duration-300 cursor-default shadow-sm overflow-hidden">
                <Link to="/profile">Perfil</Link>
            </div>
            
            <div>
                <ul>
                    {
                        menuUsuario.map((item, index)=> {
                            return(
                                <li key={index} className="px-6 py-2 text-lg hover:bg-sky-200 rounded duration-300 cursor-pointer shadow-sm">
                                    <p>{item.label}</p>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export { NavbarSuperior };
export { ContenedorPrincipal };
export {SidebarIzquierda};
export {SidebarDerecha};