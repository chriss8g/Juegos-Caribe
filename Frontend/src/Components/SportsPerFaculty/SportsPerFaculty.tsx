'use client'
import { useEffect, useState } from "react";
import useAdministration from "../../hooks/useAdministration";
import { Sport } from "../../types/Sport";


export default function SportsPerFaculty({facultyId})
{
    const{getDataByIdFromEndpoint, DataByIdFromEndpoint} = useAdministration()


    useEffect(()=>{
        getDataByIdFromEndpoint(+facultyId, "/faculty/sport")
    },[])


    const[sports, setSports] = useState<Array<Sport>>([]);

    useEffect(()=>{
        setSports(DataByIdFromEndpoint as unknown as Array<Sport>);
    },[DataByIdFromEndpoint]);

    useEffect(()=>{
        // console.log(sports)
    },[sports]);

    const [category, setCategory] = useState("");

    return (
        <div className=" MobileView">
            
                {
                    sports && sports.length > 0 &&
                        <div>
                            
                            <p className="text-red-950 font-medium text-lg mt-7">Deportes que participan:</p>
                            <div className="part-sports-main-container flex justify-between text-red-950 w-5/6 mt-7 border-b-[2px] border-b-red-950">
                                    {/* <p className={`w-1/2 text-lg mx-auto text-center pb-1 ${category === " Colectivos" ? " text-gray-500" : " sport-category  text-red-950"}`} onClick={() => setCategory(" Individuales")}>Individuales</p> */}
                                    <p className={`w-1/2 text-lg mx-auto text-center pb-1 ${category === " Colectivos" ? " text-red-950 sport-category " : " text-gray-500"}`} onClick={() => setCategory(" Colectivos")}>Colectivos</p>
                            </div>
                            {
                                    sports.map((sport, id) => (
                                        <h3>{sport.name}</h3>
                                    ))
                            }
                            
                        </div>
                }
        </div>
    );
}