'use client'
import { useEffect, useState } from "react";
import useAdministration from "../../hooks/useAdministration";
import { Sport } from "../../types/Sport";
import LessMoreBar from "../Less-More-Bar/LessMoreBar";


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


    const [category, setCategory] = useState("Colectivos");

    return (
        <div className="w-full">
            
                {
                    sports && sports.length > 0 &&
                        <div className="">
                            
                            <p className="text-red-950 font-medium text-lg mt-20 ml-10">Deportes en los que participan:</p>
                            <div className="ml-10">
                                <div className="part-sports-main-container flex justify-between text-red-950 w-5/6 mt-7 border-b-[2px] border-b-red-950">
                                    {/* <p className={`w-1/2 text-lg mx-auto text-center pb-1 ${category === " Colectivos" ? " text-gray-500" : " sport-category  text-red-950"}`} onClick={() => setCategory(" Individuales")}>Individuales</p> */}
                                    <p className="w-1/2 text-lg mx-auto text-center pb-1  text-red-950 " onClick={() => setCategory(" Colectivos")}>Colectivos</p>
                                </div>
                                <div className="w-full">
                                    {
                                        sports.map((sport, id) => (
                                            <LessMoreBar title={sport.name} text={""} key={id}/>
                                        ))
                                    }
                                </div>
                            </div>
                            
                        </div>
                }
        </div>
    );
}