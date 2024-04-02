'use client'
import { useState, useEffect } from "react";
import Layout from "../../../Components/Layout/Layout";
import MoreNewsList from "../../../Components/MoreNewsList/MoreNewsList";
import NewsCarousel from "../../../Components/NewsCarousel/NewsCarousel";
import Formulario from "../../../Components/Formulario/formulario";
import RecCommentCard from "../../../Components/RecCommentsCard/RecCommentCard";

import useAdministration from "../../../hooks/useAdministration";
import { useParams } from "next/navigation";
import { News } from "../../../types/New";
export default function NoticiaDetallada() {

    const{getDataByIdFromEndpoint, DataByIdFromEndpoint} = useAdministration()
    const{Id}= useParams();


    useEffect(()=>{
        getDataByIdFromEndpoint(+Id, "/newsArgSingle")
    },[])


    const[news, setNews] = useState({} as News);

    useEffect(()=>{
        setNews(DataByIdFromEndpoint as News);
    },[DataByIdFromEndpoint]);


    return (
        news &&
        <div className="MobileView">
            <Layout>
                <div className="det-news-main-container">
                    <img className="w-full max-h-[195px]" src={news.picture} alt="noticia detallada"/>
                    <div className="bullets-container pt-2% pb-2%">
                        <br/>
                    </div>
                    <div className="container">
                        <p className="text-start ml-1 text-lg font-bold text-red-950">{news.title}</p>
                        <p className="text-start ml-1 text-lg text-red-950 mt-2">por {news.user as unknown as string}</p>
                        <p className="text-start ml-1 text-sm text-black mt-4">{news.body}</p>
                    </div>
                    <div className="det-news-inner-container container mt-[20%]">
                        <Formulario comment={true}/>
                        <RecCommentCard Id={Id}/>

                    </div>
                </div>
            </Layout>
        </div>
    );
}