import React, { useState } from 'react';
import NewsMoreCard from "../NewsMoreCard/NewsMoreCard";

export default function MoreNewsList() {
    const [visibleNews, setVisibleNews] = useState(5);

    const News =[{
        'id': "1",
        'title': "Competencia entre los Mapaches y Lobos en Tenis de Campo",
        'images': "/main-news.png",
        'date': "13 DICIEMBRE, 2023",
        'author': "Frank Perez"
    },
        {
            'id': "1",
            'title': "Competencia entre los Mapaches y Lobos en Tenis de Campo",
            'images': "/sec-news-1.png",
            'date': "13 DICIEMBRE, 2023",
            'author': "Frank Perez"
        },
        {
            'id': "1",
            'title': "Competencia entre los Mapaches y Lobos en Tenis de Campo",
            'images': "/main-news.png",
            'date': "13 DICIEMBRE, 2023",
            'author': "Frank Perez"
        },
        {
            'id': "1",
            'title': "Competencia entre los Mapaches y Lobos en Tenis de Campo",
            'images': "/main-news.png",
            'date': "13 DICIEMBRE, 2023",
            'author': "Frank Perez"
        },
        {
            'id': "1",
            'title': "Competencia entre los Mapaches y Lobos en Tenis de Campo",
            'images': "/sec-news-1.png",
            'date': "13 DICIEMBRE, 2023",
            'author': "Frank Perez"
        },
        {
            'id': "1",
            'title': "Competencia entre los Mapaches y Lobos en Tenis de Campo",
            'images': "/main-news.png",
            'date': "13 DICIEMBRE, 2023",
            'author': "Frank Perez"
        },
        {
            'id': "1",
            'title': "Competencia entre los Mapaches y Lobos en Tenis de Campo",
            'images': "/main-news.png",
            'date': "13 DICIEMBRE, 2023",
            'author': "Frank Perez"
        },
        {
            'id': "1",
            'title': "Competencia entre los Mapaches y Lobos en Tenis de Campo",
            'images': "/main-news.png",
            'date': "13 DICIEMBRE, 2023",
            'author': "Frank Perez"
        },
        {
            'id': "1",
            'title': "Competencia entre los Mapaches y Lobos en Tenis de Campo",
            'images': "/main-news.png",
            'date': "13 DICIEMBRE, 2023",
            'author': "Frank Perez"
        },
        {
            'id': "1",
            'title': "Competencia entre los Mapaches y Lobos en Tenis de Campo",
            'images': "/main-news.png",
            'date': "13 DICIEMBRE, 2023",
            'author': "Frank Perez"
        },
        {
            'id': "1",
            'title': "Competencia entre los Mapaches y Lobos en Tenis de Campo",
            'images': "/sec-news-1.png",
            'date': "13 DICIEMBRE, 2023",
            'author': "Frank Perez"
        },
        {
            'id': "1",
            'title': "Competencia entre los Mapaches y Lobos en Tenis de Campo",
            'images': "/sec-news-2.png",
            'date': "13 DICIEMBRE, 2023",
            'author': "Frank Perez"
        }
    ]

    const showMore = () => {
        setVisibleNews(prevVisibleNews =>  Math.min(prevVisibleNews + 5, News.length));
    };

    const showLess = () => {
        setVisibleNews(prevVisibleNews => Math.max(prevVisibleNews - 5, 0));
    };

    return (
        <div className="faculties-card-list pb-4 relative">
            {News.slice(0, visibleNews).map((news) => (
                <NewsMoreCard
                    key={news.id}
                    secNews={news}
                />
            ))}
            <div className="buttons-container flex justify-between mx-5">
                <button onClick={showMore} className="bg-red-950 text-white px-2 py-2 rounded-lg">Mostrar más</button>
                <button onClick={showLess}  className="bg-red-950 text-white px-2 py-2 rounded-lg">Mostrar menos</button>
            </div>
        </div>
    );
}