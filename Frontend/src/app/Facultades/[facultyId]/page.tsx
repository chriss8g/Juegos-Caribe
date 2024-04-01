'use client'
import Layout from "../../../Components/Layout/Layout";
import AthleteCard from "../../../Components/AthleteCard/page";
import { useEffect, useState } from "react";
import Results from "../../../Components/Results/page";
import "../fac-detallada.css"
import LessMoreBar from "../../../Components/Less-More-Bar/LessMoreBar";
import MedalsFac from "../../../Components/MedalsFac/page";
import useAdministration from "../../../hooks/useAdministration";
import { useParams } from "next/navigation";
import SportsPerFaculty from "../../../Components/SportsPerFaculty/SportsPerFaculty";
import { useRouter } from "next/navigation";

export default function DetailedFaculty()
{
    const{getData, getDataByIdFromEndpoint, DataByIdFromEndpoint, Data} = useAdministration()
    const{facultyId}= useParams();
    const router = useRouter()


    useEffect(()=>{
        getDataByIdFromEndpoint(+facultyId, "/faculty")
        getData(`${process.env.API_URL}/faculty/${facultyId}/athletes`)
    },[])


    const[faculty, setFaculty] = useState({} as Faculty);
    const[athletes, setAthletes] = useState([]);

    useEffect(()=>{
        setFaculty(DataByIdFromEndpoint as Faculty);
    },[DataByIdFromEndpoint]);

    useEffect(()=>{
        setAthletes(Data);
    },[Data]);

    const [category, setCategory] = useState("");

    return (
        <div className="fac-det-main-container MobileView">
            <Layout>
                {
                    faculty && 
                        <div className="flex flex-col items-center justify-center">
                            <img src={faculty.logo} alt="logo de la facultad" className="w-1/2" />
                            <p className="text-gray-500 font-bold text-2xl px-3 text-center">{faculty.name}</p>

                            {
                                athletes.length > 0 &&
                                <>
                                    <p className="text-red-950 font-medium text-lg mt-7 mb-3">Atletas destacados</p>
                                    {
                                        athletes.map((athlete, id) => (
                                            <AthleteCard
                                                onClick={() => router.push(`/Atletas/${athlete.id}`)}
                                                key={id}
                                                athlete={athlete}
                                            />
                                        ))
                                    }
                                </>
                                
                            }

                            <SportsPerFaculty facultyId={facultyId}/>
                        
                            <MedalsFac facultyId={facultyId}/>

                            <p className="text-black font-medium text-lg mt-20">Resultados</p>
                            <Results data="" />
                        </div>
                }
            </Layout>
        </div>
    );
}