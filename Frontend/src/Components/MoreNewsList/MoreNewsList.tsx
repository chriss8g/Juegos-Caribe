import React, { useState, useEffect } from 'react';
import NewsMoreCard from "../NewsMoreCard/NewsMoreCard";
import {useRouter} from "next/navigation";

import useAdministration from "../../hooks/useAdministration";

export default function MoreNewsList() {
    const [visibleNews, setVisibleNews] = useState(5);

    const router = useRouter()

    const{getData, Data} = useAdministration()
    
    useEffect(()=>{
        getData(`${process.env.API_URL}/newsArg`)
    },[])

    const[News, setNews] = useState([]);

    useEffect(()=>{
        setNews(Data);
    },[Data]);
    

    const showMore = () => {
        setVisibleNews(prevVisibleNews =>  Math.min(prevVisibleNews + 5, News.length));
    };

    const showLess = () => {
        setVisibleNews(prevVisibleNews => Math.max(prevVisibleNews - 5, 0));
    };

    return (
        News.length > 0 &&
        <div>
            <p className="text-center text-red-950 text-lg mt-9">Más Recientes</p>
            <div className="sport-more-news-container mt-2">

                <div className="faculties-card-list pb-4 relative">
                    {News.slice(0, visibleNews).map((news) => (
                        <div onClick={()=>router.push(`/Noticias/${news.id}`)}>
                        <NewsMoreCard
                            key={news.id}
                            secNews={news}
                        />
                        </div>
                    ))}
                    <div className="buttons-container flex justify-between mx-5">
                        <button onClick={showMore} className="bg-red-950 text-white px-2 py-2 rounded-lg">Mostrar más</button>
                        <button onClick={showLess}  className="bg-red-950 text-white px-2 py-2 rounded-lg">Mostrar menos</button>
                    </div>
                </div>
            </div>
        </div>
    );
}