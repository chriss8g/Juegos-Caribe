'use client'
import "./layout.css"
import "../../app/globals.css"
import Image from 'next/image'
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs"
import Footer from "../Footer/Footer"
// import { IconMenu2, IconSearch, IconUser } from "@tabler/icons-react"
import { IconMenu2, IconSearch, IconUser } from "@tabler/icons-react";
import useAuthentication from "../../hooks/useAuthentication"
import Link from "next/link"
import {QueryClient, QueryClientProvider} from 'react-query'

export default function Layout({children})
{
    const { loggedInUser } = useAuthentication()

    // const [lenguage, setLenguage] = useState("es")
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
                            <div className="burgerMenu cursor-pointer">
                                <IconMenu2 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="DesktopView">

                </div>
                <div className="">
                    <BreadCrumbs />
                </div>
                {children}
                <Footer />
            </div>
    )
}