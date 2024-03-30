'use client'

import "../../app/globals.css"
import Layout from "../../Components/Layout/Layout";
import FacultyCard from "../../Components/FacultyCard/FacultyCard";
import useAdministration from "../../hooks/useAdministration";
import { useEffect, useState } from "react"

export default function Faculties()
{
    const{getData, Data} = useAdministration()
    
    useEffect(()=>{
        getData(`${process.env.API_URL}/faculty`)
    },[])

    const[faculties, setFaculties] = useState([]);

    useEffect(()=>{
        setFaculties(Data);
    },[Data]);

    return(
        <Layout>
            <div className= "MobileView container bg-[#f5ff5f5]">
                <div className=" faculties-main-container pb-5">
                    <h2 className="text-2xl text-gray-800 font-bold text-center pt-5">Facultades</h2>
                    {
                        faculties.length > 0 &&
                        <>
                        {
                            faculties.map((element, index)=>(
                                <div key={index} className="z-20">
                                    <FacultyCard name={element.name} image={element.logo}/>
                                </div>
                            ))
                        }
                        </>
                    }

                </div>
            </div>
        </Layout>
    )
}