'use client'
import "./layout.css"
import "../../app/globals.css"
import Image from 'next/image'
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs"
import Footer from "../Footer/Footer"
import { IconMenu2, IconSearch, IconUser, IconX } from "@tabler/icons-react";
import useAuthentication from "../../hooks/useAuthentication"
import Link from "next/link"
import { useState } from "react"

export default function Layout({children})
{
    const { loggedInUser } = useAuthentication()

    // const [lenguage, setLenguage] = useState("es")
    const [showingMenu, setShowingMenu] = useState(false)

    function handleChangeMenuState()
    {
        if(showingMenu)
            document.getElementById("SideMenu")?.classList.add("slowTransition")
        else{
            document.getElementById("SideMenu")?.classList.remove("slowTransition")
        }
        setShowingMenu(!showingMenu)
    }

    return(
            <div className="Header">
                <div className="">
                    <div className="MobileHeader">
                        <div className="w-1/2">
                            <a className="mobileLogo" href="/">
                                <Image alt="" src="/logo.svg" fill className="image"/>
                            </a>
                        </div>
                        <div className="rightHeader gap-2 mr-2 lg:hidden block">
                            <div className="IconSearch cursor-pointer">
                                <IconSearch />
                            </div>
                            <Link 
                                className="LoginIcon cursor-pointer"
                                href="/LogIn"
                            >
                                {
                                    !loggedInUser.isLoggedIn ?
                                        <IconUser />
                                        :
                                        `${loggedInUser.name[0]?.toUpperCase()+loggedInUser.lastname[0]?.toUpperCase()}`
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
                <div className="">
                    <BreadCrumbs />
                </div>
                
                <div className={`${showingMenu ? 'hidden' : 'block'}`}>
                    <div className="sideMenu w-full h-full fixed top-0 left-0 z-10 bg-[#d7d7d7a5]" onClick={()=>handleChangeMenuState()}/>
                    <div className="bg-white w-4/5 h-full fixed top-0 z-20  font-bold text-red-900 text-lg cursor-pointer" id="SideMenu">
                        <div className="w-2/12 ml-auto pt-10" onClick={()=>handleChangeMenuState()}><IconX /></div>
                        <div className="flex flex-col gap-4 px-10 py-20">
                            <a href="/">Inicio</a>
                            <a href="/Deportes">Deportes</a>
                            <a href="/Noticias">Noticias</a>
                            <a href="/Cronograma">Cronograma</a>
                            <a href="/Facultades">Facultades</a>
                            <a href="/Contactenos">Contáctanos</a>
                            <a href="/Politica-Privacidad">Política de Privacidad</a>
                            <a href="/Terminos-Condiciones">Términos de uso</a>
                        </div>
                    </div>
                </div>
                
                {children}
                
                <Footer />
            </div>
    )
}