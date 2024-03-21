'use client'
import Layout from "../../Components/Layout/Layout";
import AthleteCard from "../../Components/AthleteCard/page";
import { useState } from "react";
import Results from "../../Components/Results/page";
import "./fac-detallada.css"

export default function FacultadDetallada(facultad)
{
    const CFacultad =[
        {
            "id": 1,
            "str": "INSTEC",
            "name": "Instituto de Ciencias y Tecnologías Aplicadas.",
            "logo": "/instec.svg"
        }]

    const CAthlete =[
        {
            "id": 1,
            "sport": "Fútbol",
            "name": "Luka Modric Ramírez",
            "imagen": "/athlete1.png",
            "pos": "Medio Campo",
            "num": 10
        },
        {
            "id":2,
            "sport": "Fútbol",
            "name": "Luka Modric Ramírez",
            "imagen": "/athlete1.png",
            "pos": "Medio Campo",
            "num": 10
        },
        {
            "id":3,
            "sport": "Fútbol",
            "name": "Luka Modric Ramírez",
            "imagen": "/athlete1.png",
            "pos": "Medio Campo",
            "num": 10
        }]

    const [category, setCategory] = useState("");

    return (
        <div className="fac-det-main-container MobileView">
            <Layout>
                <div className="flex flex-col items-center justify-center">
                    <img src={CFacultad[0].logo} alt="logo de la facultad" className="w-1/2" />
                    <p className="text-gray-500 font-bold text-2xl px-3 text-center">{CFacultad[0].name}</p>
                    <p className="text-red-950 font-medium text-lg mt-7">Atletas destacados</p>

                    {CAthlete.map((athlete) => (
                        <AthleteCard
                            key={athlete.id}
                            athlete={CAthlete}
                        />
                    ))}

                    <p className="text-red-950 font-medium text-lg mt-7">Deportes que participan:</p>

                    <div className="part-sports-main-container flex justify-between text-red-950 w-3/4 mt-4">
                        <p className={`text-sm px-[13%] text-center ${category === " Colectivos" ? " text-gray-400" : " sport-category  text-red-950 font-bold  "}`} onClick={() => setCategory(" Individuales")}>Individuales</p>
                        <p className={`text-sm px-[13%] text-center ${category === " Colectivos" ? " text-red-950 font-bold sport-category " : " text-gray-400"}`} onClick={() => setCategory(" Colectivos")}>Colectivos</p>
                    </div>

                    <p className="text-black font-medium text-lg mt-7">Medallero</p>
                    <p className="text-black font-medium text-lg mt-7">Resultados</p>
                    <Results data="" />
                </div>
            </Layout>
        </div>
    );
}