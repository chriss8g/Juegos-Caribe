'use client'
import Layout from "../../Components/Layout/Layout";
import LittleSportCard from "../../Components/LittleSportCard/LittleSportCard";
import useAdministration from "../../hooks/useAdministration";
import { useEffect, useState } from "react"

export default function Sports()
{
    const{getData, Data} = useAdministration()
    
    useEffect(()=>{
        getData(`${process.env.API_URL}/sport`)
    },[])

    const[sports, setSports] = useState([]);

    useEffect(()=>{
        setSports(Data);
    },[Data]);

    return(
        <Layout>
            <div className="MobileView bg-[#f5ff5f5]">
                <h2 className="text-center text-rose-950 py-10 mb-5 font-bold">Deportes</h2>
                {
                    sports.length > 0 &&
                    <div className="">
                        <div className="display flex flex-wrap wrap px-7">
                        {
                            sports.map((sport, key)=>(
                                <div key={key}>
                                    <LittleSportCard sportName={sport.name} sportPicture={sport.logo}/>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                }
            </div>
        </Layout>
    )
}