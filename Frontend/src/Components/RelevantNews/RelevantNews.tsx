'use client'
import "../../app/globals.css"
import NewsCard from "../NewsCard/NewsCard"
import NewsMainCard from "../NewsMainCard/NewsMainCard";

import useAdministration from "../../hooks/useAdministration";
import { useEffect, useState } from "react"
import {useRouter} from "next/navigation";

export default function RelevantNews()
{
    const router = useRouter()
    const{getData, Data} = useAdministration()
    
    useEffect(()=>{
        getData(`${process.env.API_URL}/recentNews`)
    },[])

    const[news, setNews] = useState([]);

    useEffect(()=>{
        setNews(Data);
    },[Data]);
    
    return(
        news.length > 0 &&
        <div className="RelevantNews container mt-16 mb-16">
            <p className="sectionTitle text-2xl font-bold"> Noticias Relevantes</p>

            {/* Versión Móvil */}
            {
                news.map((el)=>
                (
                    <div onClick={()=>router.push(`/Noticias/${el.id}`)}>
                    <NewsMainCard key={el.id} news={el} show={true}/>
                    </div>
                ))
            }
             {/* Versión Desktop */}

            {/* <div className="DesktopView lg:flex lg:justify-between">
                <NewsMainCard news={news[0]} show={false}/>

                <div className="flex items-end flex-col justify-between">
                    {
                        news.slice(1).map((el, index, array) =>
                            (
                                <NewsCard
                                    key={el.id}
                                    news={el}
                                    show={false}
                                    last={index === array.length - 1 ? "mb-0"  :"mb-[4%]"}
                                />
                            ))
                    }
                </div>

            </div> */}


        </div>
    )
}