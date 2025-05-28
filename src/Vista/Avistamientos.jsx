import {NavbarSuperior, ContenedorPrincipal, Footer} from './Funciones_Interfaz.jsx';

function Avistamientos(){
    return(
        <div className="grid grid-rows-[auto_1fr_auto] grid-cols-1 min-h-screen">
            <header className="row-start-1 row-end-2 col-span-full">
                <NavbarSuperior/>
            </header>
            <main className="row-start-2 row-end-3 col-span-full pt-[4rem] md:pt-[5rem]">
                <h1 className='p-4'>Hola, el mapa está en construcción.</h1>
            </main>
            <footer className="row-start-3 row-end-4 col-span-full">
                <Footer/>
            </footer>
        </div>
    );
}

export default Avistamientos;