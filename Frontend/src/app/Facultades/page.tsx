'use client'

import "../../app/globals.css"
import Layout from "../../Components/Layout/Layout";
import FacultyCard from "../../Components/FacultyCard/FacultyCard";
import useAdministration from "../../hooks/useAdministration";
import { useEffect, useState } from "react"
import RedTextHeader from "../../Components/RedTextHeaders/RedTextHeader";

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
                <div className=" pb-5">
                    <RedTextHeader title="Facultades"/>
                    {
                        faculties.length > 0 &&
                        <>
                        {
                            
                            faculties.map((element, index)=>(
                                <a href={`/Facultades/${element.id}`}>
                                    <div key={element.id}>
                                        <FacultyCard name={element.name} image={element.logo}/>
                                    </div>
                                </a>
                            ))
                            
                        }
                        </>
                    }

                </div>
            </div>
        </Layout>
    )
}