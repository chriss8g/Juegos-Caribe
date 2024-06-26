'use client'

import "../../app/globals.css"
import Layout from "../../Components/Layout/Layout";
import FacultyCard from "../../Components/FacultyCard/FacultyCard";
import useAdministration from "../../hooks/useAdministration";
import { useEffect, useState } from "react"
import {useRouter} from "next/navigation";
import RedTextHeader from "../../Components/RedTextHeaders/RedTextHeader";

export default function Faculties()
{
    const router = useRouter()
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
                    <p>hola</p>
                    <RedTextHeader title="Facultades"/>
                    {
                        faculties.length > 0 &&
                        <>
                        {
                            
                            faculties.map((element, index)=>(
                                <div onClick={()=>router.push(`/Facultades/${element.id}`)} key={element.id} className="cursor-pointer" >
                                    <FacultyCard name={element.name} image={element.logo} facultyId={element.id}/>
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