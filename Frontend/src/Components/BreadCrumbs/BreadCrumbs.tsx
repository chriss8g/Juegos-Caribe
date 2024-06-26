'use client'
import { useEffect, useState } from "react"
import Image from 'next/image'
import "./BreadCrumbs.css"
import { useRouter, usePathname } from "next/navigation"

export default function BreadCrumbs()
{
    const [route, setRoute] = useState(["Inicio"])
    var Color = "gray";
    useEffect(()=>
    {
        const splittedRoute = location?.href.split("/")
        for (let i = 0; i < splittedRoute.length; i++) {
            const crumb = splittedRoute[i] === "Contactenos" ? "Contáctenos" : splittedRoute[i]
            if(i >= 3 && !route.includes(crumb))
            {
                setRoute([...route, crumb])
            }
        }
    },[])

    const router = useRouter()
    const pathname = usePathname()

    const changeRoute=(crumb)=>
    {
        var found = false
        var stringRoute = "/"
        for (let i = 1; i < route.length; i++) {
            if(route[i] === crumb)
            {
                found = true
            }
            if(found === true)
            {
                var str = route[i] === "Contáctenos" ? "Contactenos" : route[i]
                stringRoute+=str+"/"
            }
        }
        router.push(stringRoute)
    }
    const noCrumbsPages = ["/"]

    return(
        <div className="BreadCrumbs lg:mt-1 lg:p-2" style={pathname === "/" ? {display: 'none'} : {}}>
            {
                !noCrumbsPages.includes(pathname) &&
                route.map((crumb, index)=>{
                    if (index===route.length-1) {
                        Color = "#5a1024"
                    }
                    return(
                        <div className="crumbs lg:py-0" key={index} onClick={()=>changeRoute(crumb)}>
                            {
                                index > 0 &&
                                <img src="/chevron-right.svg" alt="right arrow" className="h-[1.6rem]"/>
                            }
                            <p style={{color:Color}} className="text-nowrap">{crumb}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}