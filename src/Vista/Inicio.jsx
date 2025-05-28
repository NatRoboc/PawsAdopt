import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {NavbarSuperior, ContenedorPrincipal, SidebarIzquierda, SidebarDerecha, Footer} from './Funciones_Interfaz.jsx';

function Inicio() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto_auto] grid-cols-1 min-h-screen">
            <header className="row-start-1 row-end-2 col-span-full">
                <NavbarSuperior />
            </header>

            <main className="grid grid-cols-[1fr_4fr_1fr] row-start-2 row-end-3 col-span-full pt-[4rem] md:pt-[5rem]">
                <div className="h-full">
                    <SidebarIzquierda />
                </div>
                <div className="h-full">
                    <ContenedorPrincipal />
                </div>

                <div className="h-full">
                    <SidebarDerecha />
                </div>
            </main>

            <footer className="row-start-3 row-end-4 col-span-full">
                <Footer/>
            </footer>
        </div>
    );
}

export default Inicio;
