'use client'
import {useState} from "react"
import "./layout.css"
import "../../app/globals.css"
import Image from 'next/image'
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs"
import Footer from "../Footer/Footer"
import logo from '../../../public/logo.svg';
import NavBar from "../NavBar/NavBar";

export default function Layout({children}) {
    const [lenguage, setLenguage] = useState("es")
    return (
        <div className="Header">
            <div className="MobileView">
                <div className="MobileHeader">
                    <div className="leftHeader">
                        <div className="mobileLogo">
                            <Image alt="" src="/logo.svg" fill className="image"/>
                        </div>
                    </div>
                    <div className="rightHeader">
                        <div className="searchIcon">
                            <Image alt="" src="/search.svg" fill className="image"/>
                        </div>
                        <h2 onClick={() => {
                            lenguage === "es" ? setLenguage("en") : setLenguage("es")
                        }}>
                            {lenguage.toUpperCase()}
                        </h2>
                        <div className="burgerMenu cursor-pointer">
                            <IconMenu2 />
                        </div>
                    </div>
                </div>
            </div>
            <div className="DesktopView">
                <NavBar/>
            </div>
            <div className="MobileView DesktopView">
                <BreadCrumbs/>
            </div>
            {children}
            <Footer/>
        </div>
    )
}