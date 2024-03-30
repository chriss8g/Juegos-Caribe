'use client'
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './noticias.css';
import Layout from "../../Components/Layout/Layout";
import MainNews from "../../Components/MainNews/MainNews";
import MoreNewsList from "../../Components/MoreNewsList/MoreNewsList";

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
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
            swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
            swiperRef.current.swiper.navigation.update();
        }
    }, []);
    return (
        <div className="MobileView">
            <Layout>
                <div className="news-main-container">
                    <div className="main-new-container">
                        <Swiper
                            navigation
                            pagination={{ clickable: true, dynamicBullets: true }}
                            slidesPerView={1}
                            modules={[Navigation, Pagination]}
                            ref={swiperRef}
                        >
                            {News.map((newsItem) => (
                                <SwiperSlide key={newsItem.id}>
                                    <MainNews news={newsItem}/>
                                    <div className="bullets-container pt-2% pb-2%">
                                        <br/>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
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