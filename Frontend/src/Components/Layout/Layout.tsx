'use client'
import "./layout.css"
import "../../app/globals.css"
import Image from 'next/image'
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs"
import Footer from "../Footer/Footer"
import { IconMenu2, IconSearch, IconUser, IconX } from "@tabler/icons-react";
import useAuthentication from "../../hooks/useAuthentication"
import Link from "next/link"
import {useState, useEffect} from "react"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { getCookie } from "cookies-next"

export default function Layout({children})
{
    const loggedInUser = getCookie("loggedInUser")

    // const [lenguage, setLenguage] = useState("es")
    const [showingMenu, setShowingMenu] = useState(false)

    function handleChangeMenuState()
    {
        setShowingMenu(!showingMenu)
    }

    return(
            <div className="Header">
                <div className="">
                    <div className="MobileHeader lg:!py-0 lg:!mb-0">
                        <div className="w-1/2 lg:w-2/12 lg:my-3">
                            <a className="mobileLogo" href="/">
                                <Image alt="" src="/logo.svg" fill className="image"/>
                            </a>
                        </div>
                        <div className="flex gap-2 mr-2 lg:hidden pt-2">
                            {/* <div className="IconSearch cursor-pointer">
                                <IconSearch />
                            </div> */}
                            <Link 
                                className="LoginIcon cursor-pointer"
                                href="/LogIn"
                            >
                                {
                                    !loggedInUser ?
                                        <IconUser />
                                        :
                                        <div className="bg-[#5a1024] text-white px-3 py-1 rounded-full">
                                            {loggedInUser[0]?.toUpperCase()}
                                        </div>
                                    }
                            </Link>
                            {/* <h2 
                                className="cursor-pointer"
                                onClick={
                                    ()=>{ lenguage === "es" ? setLenguage("en"): setLenguage("es")}
                                }>
                                {lenguage.toUpperCase()}
                            </h2> */}
                            <div className="burgerMenu cursor-pointer" onClick={()=>handleChangeMenuState()}>
                                <IconMenu2 />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="">
                    <BreadCrumbs />
                </div> */}
                
                <div className={`${showingMenu ? 'block' : 'hidden'}`}>
                    <div className="sideMenu w-full h-full fixed top-0 left-0 z-10 bg-[#d7d7d7a5]" onClick={()=>handleChangeMenuState()}/>
                    <div className="bg-white w-4/5 h-full fixed top-0 z-20  font-bold text-red-900 text-lg cursor-pointer slowTransition">
                        <div className="w-2/12 ml-auto pt-10" onClick={()=>handleChangeMenuState()}><IconX /></div>
                        <div className="flex flex-col gap-4 px-10 py-20">
                            <a href="/">Inicio</a>
                            <a href="/Deportes">Deportes</a>
                            <a href="/Noticias">Noticias</a>
                            <a href="/Cronograma">Cronograma</a>
                            <a href="/Facultades">Facultades</a>
                            <a href="/Contactenos">Contáctenos</a>
                            <a href="/Politica-Privacidad">Política de Privacidad</a>
                            <a href="/Terminos-Condiciones">Términos de uso</a>
                            <a href="/Reglamento">Reglamento</a>
                            <a href="/Comisionado">Comisión</a>
                        </div>
                    </div>
                </div>
                
                {children}
                <ToastContainer />
                <Footer />
            </div>
    )
}