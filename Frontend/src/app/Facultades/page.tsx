'use client'

import "../../app/globals.css"
import Image from "next/image"
import Layout from "../../Components/Layout/Layout";
import FacultyCardList from "../../Components/FacultyCardList/FacultyCardList";
import Pagination from "../../Components/Pagination/Pagination";

export default function Faculties()
{
    const facultiesData = [
        {
            "id": 1,
            "name": "Artes y Letras",
            "image": "/artes_letras.svg"
        },
        {
            "id": 2,
            "name": "Biología",
            "image": "/biologia.svg"
        },
        {
            "id": 3,
            "name": "Contabilidad y Finanzas",
            "image": "/contabilidad_finanzas.svg"
        },
        {
            "id": 4,
            "name": "Derecho",
            "image": "/derecho.svg"
        },
    ]; // Add your faculties data here

    return(
        <Layout>
            <div className= "MobileView container bg-[#f5ff5f5]">
                <div className="faculties-main-container">
                    <p className="text-2xl text-gray-800 font-bold text-center">Facultades</p>

                    <Pagination itemComponent={FacultyCardList} data={facultiesData} percentage={100}/>
                </div>
                    {/*<div className="back-circle absolute right-0 bottom-3 h-[30vh] z-10">*/}
                    {/*    <Image src="/circle-right.png" alt="circle-right" fill className="image"/>*/}
                    {/*</div>*/}
            </div>
        </Layout>
    )
}