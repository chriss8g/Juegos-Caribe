'use client'
import "../../app/globals.css"
import NewsCard from "../NewsCard/NewsCard"
import NewsMainCard from "../NewsMainCard/NewsMainCard";

import useAdministration from "../../hooks/useAdministration";
import { useEffect, useState } from "react"
import RedTextHeader from "../RedTextHeaders/RedTextHeader";

export default function RelevantNews()
{
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
        <div className="RelevantNews container">
            <p className="sectionTitle text-2xl font-bold"> Noticias Relevantes</p>

            {/* Versión Móvil */}
            {
                news.map((el)=>
                (
                    <NewsMainCard key={el.id} news={el} show={true}/>
                ))
            }
             {/* Versión Desktop */}

            <div className="DesktopView lg:flex lg:justify-between">
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

            </div>


        </div>
    )
}