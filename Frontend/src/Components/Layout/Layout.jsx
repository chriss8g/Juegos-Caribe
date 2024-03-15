'use client'
<<<<<<< HEAD
=======
import {useState} from "react"
>>>>>>> e99118e26a2bdf745027a214163f02dfc4119d89
import "./layout.css"
import "../../app/globals.css"
import Image from 'next/image'
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs"
import Footer from "../Footer/Footer"
<<<<<<< HEAD
import { IconMenu2, IconSearch, IconUser } from "@tabler/icons-react"
import useAuthentication from "../../hooks/useAuthentication"
import Link from "next/link"

export default function Layout({children})
{
    const { loggedInUser } = useAuthentication()


    // const [lenguage, setLenguage] = useState("es")
    return(
=======
import logo from '../../../public/logo.svg';
import NavBar from "../NavBar/NavBar";

export default function Layout({children}) {
    const [lenguage, setLenguage] = useState("es")
    return (
>>>>>>> e99118e26a2bdf745027a214163f02dfc4119d89
        <div className="Header">
            <div className="MobileView">
                <div className="MobileHeader">
                    <div className="leftHeader">
                        <div className="mobileLogo">
                            <Image alt="" src="/logo.svg" fill className="image"/>
                        </div>
                    </div>
<<<<<<< HEAD
                    <div className="rightHeader gap-2 mr-2">
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
=======
                    <div className="rightHeader">
                        <div className="searchIcon">
                            <Image alt="" src="/search.svg" fill className="image"/>
                        </div>x
                        <h2 onClick={() => {
                            lenguage === "es" ? setLenguage("en") : setLenguage("es")
                        }}>
>>>>>>> e99118e26a2bdf745027a214163f02dfc4119d89
                            {lenguage.toUpperCase()}
                        </h2> */}
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