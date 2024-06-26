'use client'
import { useEffect, useState } from "react"
import "./playcard.css"
import Image from "next/image"
import useSiteContext from "../../hooks/useSiteContext"
export default function PlayCard({play})
{
    const[isLoading, setIsLoading] = useState(true)
    const { Faculties }= useSiteContext()
    const [logo1, setLogo1] = useState("")
    const [logo2, setLogo2] = useState("")

    useEffect(()=>
    {
        console.log(play.teams)
        Faculties.map((fac)=>
        {
            // if(play.teams[0] === fac.name)
            // {
            //     setLogo1(fac.logo)
            // }
            // if(play.teams[1] === fac.name)
            // {
            //   setLogo2(fac.logo)
            // }
        })
    }, [play])

    


    return(
        <div className="MobileView play-card-container mb-10">
            <div className="MobileView PlayCard">
                <div className="row">
                    <div className="left column">
                        <div className="facLogo">
                            <Image src={logo1} fill className="image" alt=""/>
                        </div>
                    </div>
                    <div className="center column">
                        <p className="font-bold text-gray-700 w-[100%] pt-[10%] pb-1/5 text-[1rem]">{play.sport} {play.sex === "Masculino" ? "(M)" : play.sex === "Femenino" ? "(F)": "(Mix)"}</p>
                        <p className="font-bold text-xl text-gray-700 pt-[10%]">{play.points[0]}-{play.points[1]}</p>
                    </div>
                    <div className="right column">
                        <div className="facLogo">
                            <Image src={logo2} fill className="image" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row teamsRow">
                    <p className="text-gray-700 text-sm font-bold">{play.teams[0]}</p>
                    <p className="text-gray-700 text-sm font-bold">{play.estado}</p>
                    <p className="text-gray-700 text-sm font-bold">{play.teams[1]}</p>
                </div>
                <div className="cardFooter">
                    <p className="text-gray-700 text-sm">{play.place}</p>
                    <p className="text-gray-700 text-sm">{play.phase}</p>
                </div>
            </div>

                {/* <div className="details shadow-lg">
                    <p className="text-[1rem] font-medium text-gray-800">Detalles del Partido</p>
                </div> */}
                <p className="text-gray-700 text-sm">{play.detailResult}</p>
        </div> 
    )
}