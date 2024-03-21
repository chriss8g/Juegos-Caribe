'use client'
import {useState} from "react"
import "../../app/globals.css"
import Image from "next/image";
export default function NavBar()
{
    return(
<div className="DesktopHeader">
    <nav className="flex items-center justify-between flex-wrap p-6 shadow-md shadow-gray-300">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img className="w-40" src="/logo.svg" alt="Logo de los Juegos Caribe"/>

        </div>
        <div className="block lg:hidden">
            <button
                className="flex items-center px-3 py-2 border rounded text-gray-500 border-teal-400 hover:text-red-950 hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-lg lg:flex-grow">
                <a href="/"
                   className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-red-950 mr-5">
                    Inicio
                </a>
                <a href="Facultades"
                   className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-red-950 mr-5">
                    Facultades
                </a>

                <a href="Cronograma"
                   className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-red-950 mr-5">
                    Cronograma
                </a>
                <a href="Deporte"
                   className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-red-950 mr-5">
                    Deporte
                </a>
                <a href="Noticias"
                   className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-red-950 mr-5">
                    Noticias
                </a>
                <p
                   className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-red-950 mr-2">
                    Juegos caribes
                </p>
                <a href="#responsive-header"
                   className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-red-950 mr-2">
                    <div className="w-4">

                        <div className="arrowImg cursor-pointer">
                            <Image src="/more.svg" alt="" fill className="image"/>
                        </div>
                    </div>
                </a>
            </div>
            <div className="w-fit flex justify-center align-center">
                <img className="w-5 cursor-pointer mr-2" src="search.svg"/>
                <p className="text-gray-400 mr-2 text-2xl/7">|</p>
                <p className="text-gray-500 cursor-pointer">ES</p>
            </div>
        </div>
    </nav>
</div>
    )
}