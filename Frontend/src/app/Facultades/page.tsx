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
                <div className=" faculties-main-container pb-5">
                    <h2 className="text-2xl text-gray-800 font-bold text-center pt-5">Facultades</h2>
                    
                    <div className="relative z-10 bg-red-500">
                        <Pagination itemComponent={FacultyCardList} data={facultiesData} percentage={100}/>
                    </div>

                </div>
            </div>
        </Layout>
    )
}