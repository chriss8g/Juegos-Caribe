'use client'
import Layout from "../../Components/Layout/Layout";
import SubtitleText from "../../Components/SubtitleText/SubtitleText";
import "../../Components/FacultyPreview/FacultyPreview.css"
import { useEffect, useState } from "react"
import Pagination from '../../Components/Pagination/Pagination'
import "../globals.css"
import CardITB from "../../Components/CardITB/CardITB";
import ComisionerCard from "../../Components/ComisionerCard/comisionerCard";

export default function Comisioner()
{
    const comisioner = [
        {
            "name": "Elemento 1",
            "image": "/comisionado.png",
            "posicion": "Dir. de la DIrección de Cultura Fisica y Deporte (INDER)",
            "comision": "organizativa"
        },
        {
            "name": "Elemento 2",
            "image": "/comisionado.png",
            "posicion": "Dir. de la Dirección de Cultura Fisica y Deporte (INDER)",
            "comision": "organizativa"
        },
        {
            "name": "Elemento 3",
            "image": "/comisionado.png",
            "posicion": "Dir. de la Dirección de Cultura Fisica y Deporte (INDER)",
            "comision": "organizativa"
        },
        {
            "name": "Elemento 4",
            "image": "/comisionado.png",
            "posicion": "Dir. de la Dirección de Cultura Fisica y Deporte (INDER)",
            "comision": "organizativa"
        },
        {
            "name": "Elemento 5",
            "image": "/comisionado.png",
            "posicion": "Dir. de la Dirección de Cultura Fisica y Deporte (INDER)",
            "comision": "disciplinariaS"
        },
        {
            "name": "Elemento 6",
            "image": "/comisionado.png",
            "posicion": "Dir. de la Dirección de Cultura Fisica y Deporte (INDER)",
            "comision": "disciplinariaS"
        },
        {
            "name": "Elemento 7",
            "image": "/comisionado.png",
            "posicion": "Dir. de la Dirección de Cultura Fisica y Deporte (INDER)",
            "comision": "disciplinariaS"
        }
        ,
        {
            "name": "Elemento 8",
            "image": "/comisionado.png",
            "posicion": "Dir. de la Dirección de Cultura Fisica y Deporte (INDER)",
            "comision": "disciplinariaP"
        },
        {
            "name": "Elemento 9",
            "image": "/comisionado.png",
            "posicion": "Dir. de la Dirección de Cultura Fisica y Deporte (INDER)",
            "comision": "disciplinariaP"
        }
        ,
        {
            "name": "Elemento 10",
            "image": "/comisionado.png",
            "posicion": "Dir. de la Dirección de Cultura Fisica y Deporte (INDER)",
            "comision": "disciplinariaP"
        }
    ]

        // Paso 1: Dividir la lista comisioner
    const [organizativa, setOrganizativa] = useState([]);
    const [disciplinariaP, setDisciplinariaP] = useState([]);
    const [disciplinariaS, setDisciplinariaS] = useState([]);

    useEffect(() => {
        // Paso 2: Renombrar los campos y dividir la lista
        const organizativaList = comisioner.filter(item => item.comision === 'organizativa').map(item => ({
            name: item.name,
            body: item.posicion,
            image: item.image
        }));

        const disciplinariaPList = comisioner.filter(item => item.comision === 'disciplinariaP').map(item => ({
            name: item.name,
            body: item.posicion,
            image: item.image
        }));

        const disciplinariaSList = comisioner.filter(item => item.comision === 'disciplinariaS').map(item => ({
            name: item.name,
            body: item.posicion,
            image: item.image
        }));
        // Paso 3: Actualizar el estado
        setOrganizativa(organizativaList);
        setDisciplinariaP(disciplinariaPList);
        setDisciplinariaS(disciplinariaSList);
    }, []);

    return(
        
        <div className="Comisioner MobileView">
            <Layout>
                <h2 className="flex justify-center font-bold text-2xl text-gray-800 mt-6">Comisión</h2>
                <div className="font-text-6">
                    <p className="text-red-950 mt-6 text-center text-lg mb-3">Comisión Organizativa</p>

                    <Pagination itemComponent={CardITB} data={organizativa}/>

                </div>


                <p className="text-red-950 mt-6 text-center text-lg mb-3">Comisión Disciplinaria</p>
                <div className="text-center text-[#616469] mx-6">
                    <div>
                        <p className="mt-1 underline">Miembros permanentes</p>
                        <div className="mt-3 flex justify-center flex-col">
                            {disciplinariaP.map((item, index) => (
                                <div className="flex justify-center" key={index}>
                                    <ComisionerCard name={item.name} image={item.image} posicion={item.body}/>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
                <div className="text-center text-[#616469] mx-6 my-10">
                    <div className="">
                        <p className="underline">Miembros suplentes</p>
                        <div className="mt-3">
                            {disciplinariaS.map((item, index) => (
                                <div className="flex justify-center" key={index}>
                                    <ComisionerCard name={item.name} image={item.image} posicion={item.body}/>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </Layout>
        </div>
    )
}