'use client'
import Layout from "../../../Components/Layout/Layout"
import AthleteData from "../../../Components/AthleteData/page";
import AthleteSport from "../../../Components/AthleteSport/page"
import AthletePresentation from "../../../Components/AthletePresentation/page"
import CornerCircle from "../../../Components/RightUpCornerCircle/page"

import useAdministration from "../../../hooks/useAdministration";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Athlete } from "../../../types/Athlete";

export default function DetailedAthlete()
{
    const{getData, getDataByIdFromEndpoint, DataByIdFromEndpoint, Data} = useAdministration()
    const{Id}= useParams();


    useEffect(()=>{
        getDataByIdFromEndpoint(+Id, "/athlete/large")
        getData(`${process.env.API_URL}/athlete/${Id}/sports`)
    },[])


    const[sports, setSports] = useState([]);
    const[athlete, setAthlete] = useState({} as Athlete);

    useEffect(()=>{
        setAthlete(DataByIdFromEndpoint as Athlete);
    },[DataByIdFromEndpoint]);

    useEffect(()=>{
        setSports(Data);
    },[Data]);

        return(
            athlete &&
            <Layout>
                

                <div className="MobileView container relative overflow-hidden ">
                    <CornerCircle/>

                    <AthletePresentation Atleta={athlete}/>        

                    <AthleteData data={athlete}/>
                    
                    {
                    sports.length > 0 &&
                    <div>
                        <h2 className="text-start text-md font-black text-red-950 mt-6">Deportes</h2>
                        
                        <div className="columns-2 pb-12">
                            {
                                sports.map((sport, key)=>
                                (
                                    <AthleteSport key={key} sport={sport}/>
                                ))
                            }
                        </div>
                    </div>
                    }
                </div>
            </Layout>
    )
}
