'use client'
import Layout from "../../../Components/Layout/Layout";
import AthleteCard from "../../../Components/AthleteCard/page";
import { useEffect, useState } from "react";
import Results from "../../../Components/Results/page";
import "../fac-detallada.css"
import LessMoreBar from "../../../Components/Less-More-Bar/LessMoreBar";
import MedalTable from "../../../Components/MedalTable/MedalTable";
import MedalsFac from "../../../Components/MedalsFac/page";
import useAdministration from "../../../hooks/useAdministration";
import axios from "axios";
import { useParams } from "next/navigation";
import useEntityInformation from "../../../hooks/useEntityInformation";


export default function FacultadDetallada()
{
    const{getData, getDataByIdFromEndpoint, DataByIdFromEndpoint, Data} = useAdministration()
    const{facultyId}= useParams();


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
                    faculty && athletes.length > 0 &&
                        <div className="flex flex-col items-center justify-center">
                            <img src={faculty.logo} alt="logo de la facultad" className="w-1/2" />
                            <p className="text-gray-500 font-bold text-2xl px-3 text-center">{faculty.name}</p>
                            <p className="text-red-950 font-medium text-lg mt-7">Atletas destacados</p>

                            {athletes.map((athlete, id) => (
                                <AthleteCard
                                    key={id}
                                    athlete={athlete}
                                />
                            ))}

                            <p className="text-red-950 font-medium text-lg mt-7">Deportes que participan:</p>
                            <div className="part-sports-main-container flex justify-between text-red-950 w-5/6 mt-7 border-b-[2px] border-b-red-950">
                                    {/* <p className={`w-1/2 text-lg mx-auto text-center pb-1 ${category === " Colectivos" ? " text-gray-500" : " sport-category  text-red-950"}`} onClick={() => setCategory(" Individuales")}>Individuales</p> */}
                                    <p className={`w-1/2 text-lg mx-auto text-center pb-1 ${category === " Colectivos" ? " text-red-950 sport-category " : " text-gray-500"}`} onClick={() => setCategory(" Colectivos")}>Colectivos</p>
                            </div>
                            <LessMoreBar title={"Ajedrez"} text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur minus excepturi dicta veniam inventore rem voluptas neque magni nulla. Quasi sed reprehenderit quo architecto quaerat illo possimus tenetur culpa nesciunt!"/>
                            <LessMoreBar title={"Baloncesto"} text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur minus excepturi dicta veniam inventore rem voluptas neque magni nulla. Quasi sed reprehenderit quo architecto quaerat illo possimus tenetur culpa nesciunt!"/>
                            <LessMoreBar title={"Baloncesto 3x3"} text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur minus excepturi dicta veniam inventore rem voluptas neque magni nulla. Quasi sed reprehenderit quo architecto quaerat illo possimus tenetur culpa nesciunt!"/>
                            <LessMoreBar title={"Balonmano"} text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur minus excepturi dicta veniam inventore rem voluptas neque magni nulla. Quasi sed reprehenderit quo architecto quaerat illo possimus tenetur culpa nesciunt!"/>



                            <p className="text-black font-medium text-lg mt-7">Medallero</p>
                            <MedalsFac/>

                            <p className="text-black font-medium text-lg mt-7">Resultados</p>
                            <Results data="" />
                        </div>
                }
            </Layout>
        </div>
    );
}