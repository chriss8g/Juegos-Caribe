'use client'
import { useEffect, useState } from "react"
import "./noticias.css"
import MainNews from "../../Components/MainNews/MainNews";
import Image from "next/image"
import Layout from "../../Components/Layout/Layout";
export default function Noticias()
{
    const News =[{
        "id": "1",
        "title": "Competencia entre los Mapaches y Lobos en Tenis de Campo",
        "sport": "tennis-white",
        "images": ["/main-news.png"],
        "date": "13 DICIEMBRE, 2023",
        "author": "Frank Perez",
    },
    {
        "id": "2",
        "title": "El atletismo femenino nos brindó una gran competencia.",
        "sport": "chess-white",
        "images": ["/newsTest.png"],
        "date": "28 DICIEMBRE, 2023",
        "author": "Frank Perez",
    }]

    return(
        <div className="MobileView">
            <Layout>
                <div className="sports-main-container">
                    <div className="sport-main-new-container">
                        <MainNews
                                news={News[0]}
                        />
                        <MainNews
                            news={News[1]}
                        />
                    </div>
                </div>
            </Layout>
        </div>
    )
}