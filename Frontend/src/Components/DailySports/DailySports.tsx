'use client'
import SportCard from "../SportCard/SportCard"
import "./DailySports.css"
import useAdministration from "../../hooks/useAdministration";
import { useEffect, useState } from "react"

export default function DailySports()
{
    const{getData, Data} = useAdministration()
    
    useEffect(()=>{
        getData(`${process.env.API_URL}/dailySport`)
    },[])

    const[sports, setSports] = useState([]);

    useEffect(()=>{
        setSports(Data);
    },[Data]);

    return(
        sports.length > 0 &&
        <div className="DailySports container">
            <h2 className="sectionTitle text-2xl font-bold">Deportes del día</h2>
            <div className="SportsList">
            {
                sports.map((sport, id)=>(
                    <SportCard sportName={sport.name} sportPicture={sport.logo}/>
                ))
            }
            </div>
        </div>

    )
}