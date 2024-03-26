'use client'
import Layout from "../../Components/Layout/Layout";
import TextWithTitle2 from "../../Components/TextWithTitle2/TextWithTitle2";

import "../../Components/FacultyPreview/FacultyPreview.css"
import CardITB from "../../Components/CardITB/CardITB"
import CardITBV from "../../Components/CardITBV/CardITBV"
import { useEffect, useState } from "react"
import Pagination from '../../Components/Pagination/Pagination'
import "../globals.css"

export default function Comisioner()
{
    const comisioner = [
        {
            "name": "Ernesto Guilart Ruiz",
            "image": "/lenguas_extranjeras.svg",
            "cargo": "Dir. de la DIrecci[on de Cultura Fisica y Deporte (INDER)",
            "comision": "organizativa"
        },
        {
            "name": "Ernesto Guilart Ruiz",
            "image": "/lenguas_extranjeras.svg",
            "cargo": "Dir. de la DIrecci[on de Cultura Fisica y Deporte (INDER)",
            "comision": "disciplinariaP"
        },
        {
            "name": "Ernesto Guilart Ruiz",
            "image": "/lenguas_extranjeras.svg",
            "cargo": "Dir. de la DIrecci[on de Cultura Fisica y Deporte (INDER)",
            "comision": "disciplinariaS"
        },
        {
            "name": "Ernesto Guilart Ruiz",
            "image": "/lenguas_extranjeras.svg",
            "cargo": "Dir. de la DIrecci[on de Cultura Fisica y Deporte (INDER)",
            "comision": "organizativa"
        },
        ]


        // Paso 1: Dividir la lista comisioner
    const [organizativa, setOrganizativa] = useState([]);
    const [disciplinariaP, setDisciplinariaP] = useState([]);
    const [disciplinariaS, setDisciplinariaS] = useState([]);

    useEffect(() => {
        // Paso 2: Renombrar los campos y dividir la lista
        const organizativaList = comisioner.filter(item => item.comision === 'organizativa').map(item => ({
            name: item.name,
            body: item.cargo,
            image: item.image
        }));

        const disciplinariaPList = comisioner.filter(item => item.comision === 'disciplinariaP').map(item => ({
            name: item.name,
            body: item.cargo,
            image: item.image
        }));

        const disciplinariaSList = comisioner.filter(item => item.comision === 'disciplinariaS').map(item => ({
            name: item.name,
            body: item.cargo,
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
                    <TextWithTitle2 title={"Comisión Organizativa"} text={""}/>

                    <Pagination itemComponent={CardITB} data={organizativa}/>

                </div>


                <TextWithTitle2 title={"Comisión Disciplinaria"} text={""}/>
                <div className="text-center text-gray-400 mx-6">
                    <div>
                        <p className="mb-6 underline">Miembros permanentes</p>
                        <div className="mt-6">
                            {disciplinariaP.map((item, index)=>(
                                <div className="flex justify-center" key={index}>
                                    <CardITBV name={item.name} image={item.image} body={item.body}/>
                                </div>    
                            ))}
                            
                        </div>
                        
                    </div>
                </div>
                    <div className="text-center text-gray-400 mx-6 my-10">
                        <div className="">
                        <p className="underline">Miembros suplentes</p>
                        <div className="mt-6">
                            {disciplinariaS.map((item, index)=>(
                                <div className="flex justify-center" key={index}>
                                    <CardITBV name={item.name} image={item.image} body={item.body}/>
                                </div>    
                            ))}
                        </div>
                        </div>
                    
                </div>
            </Layout>
        </div>
    )
}