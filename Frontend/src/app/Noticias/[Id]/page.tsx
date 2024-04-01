'use client'
import { useRef, useEffect } from "react";
import Layout from "../../../Components/Layout/Layout";
import MoreNewsList from "../../../Components/MoreNewsList/MoreNewsList";
import NewsCarousel from "../../../Components/NewsCarousel/NewsCarousel";
import Formulario from "../../../Components/Formulario/formulario";
import RecCommentCard from "../../../Components/RecCommentsCard/RecCommentCard";

export default function NoticiaDetallada() {
    const News =[{
        'id': "1",
        'title': "Competencia entre los Mapaches y Lobos en Tenis de Campo",
        'images': "/main-news.png",
        'date': "13 DICIEMBRE, 2023",
        'author': "Juan Perez",
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut inchoavit aut spem adfectas aut satisfactionem.'
    },
        {
            'id': "1",
            'title': "Título 2",
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
                <div className="det-news-main-container">
                    <div className="main-det-new-container">
                        <NewsCarousel News={News} main={false}/>
                    </div>
                    <div className="det-news-inner-container container mt-[20%]">
                        <Formulario comment={true}/>
                        <RecCommentCard/>

                    </div>
                </div>
            </Layout>
        </div>
    );
}