'use client'
import { useRef, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import MoreNewsList from "../../Components/MoreNewsList/MoreNewsList";
import NewsCarousel from "../../Components/NewsCarousel/NewsCarousel";

export default function Noticias() {
    const News =[{
        'id': "1",
        'title': "Competencia entre los Mapaches y Lobos en Tenis de Campo",
        'images': "/main-news.png",
        'date': "13 DICIEMBRE, 2023",
        'author': "Juan Perez"
    },
        {
            'id': "1",
            'title': "Competencia entre los Mapaches y Lobos en Tenis de Campo",
            'images': "/sec-news-1.png",
            'date': "13 DICIEMBRE, 2023",
            'author': "Juan Perez"
        },
        {
            'id': "1",
            'title': "Competencia entre los Mapaches y Lobos en Tenis de Campo",
            'images': "/main-news.png",
            'date': "13 DICIEMBRE, 2023",
            'author': "Juan Perez"
        },
        {
            'id': "1",
            'title': "Competencia entre los Mapaches y Lobos en Tenis de Campo",
            'images': "/main-news.png",
            'date': "13 DICIEMBRE, 2023",
            'author': "Juan Perez"
        },
        {
            'id': "1",
            'title': "Competencia entre los Mapaches y Lobos en Tenis de Campo",
            'images': "/main-news.png",
            'date': "13 DICIEMBRE, 2023",
            'author': "Juan Perez"
        }]

    return (
        <div className="MobileView">
            <Layout>
                <div className="news-main-container">
                    <div className="main-new-container">
                        <NewsCarousel News={News} main={true}/>
                    </div>
                    <div className="secondary-sports-container container">

                        <p className="text-center text-red-950 text-lg mt-9">Más Recientes</p>

                        <div className="sport-more-news-container mt-2">
                            <MoreNewsList/>
                        </div>

                    </div>

                </div>
            </Layout>
        </div>
    );
}