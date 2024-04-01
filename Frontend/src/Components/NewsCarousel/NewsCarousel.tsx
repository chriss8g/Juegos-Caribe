'use client'
import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./newsCarousel.css";
import MainNews from "../../Components/MainNews/MainNews";

export default function NewsCarousel({News, main}) {

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const [activeNews, setActiveNews] = useState({title: News[0].title, author: News[0].author, body: News[0].body});

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
            swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
            swiperRef.current.swiper.navigation.update();
        }
    }, []);
    return (
        <div className="MobileView">

            <Swiper
                navigation
                pagination={{clickable: true, dynamicBullets: true}}
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                ref={swiperRef}
                onSlideChange={(swiper) => setActiveNews({title: News[swiper.activeIndex].title, author: News[swiper.activeIndex].author, body: News[swiper.activeIndex].body})}
            >
                {
                    main ?
                        News.map((newsItem) => (
                            <SwiperSlide key={newsItem.id}>
                                <MainNews news={newsItem}/>
                                <div className="bullets-container pt-2% pb-2%">
                                    <br/>
                                </div>
                            </SwiperSlide>
                        ))
                        :
                        News.map((newsPic) => (
                            <SwiperSlide key={newsPic.id}>
                                <img className="w-full" src={newsPic.images} alt="noticia detallada"/>
                                <div className="bullets-container pt-2% pb-2%">
                                    <br/>
                                </div>
                            </SwiperSlide>
                        ))
                }
            </Swiper>
            <div className="container">
                <p className="text-start ml-1 text-lg font-bold text-red-950">{activeNews.title}</p>
                <p className="text-start ml-1 text-lg text-red-950 mt-2">por {activeNews.author}</p>
                <p className="text-start ml-1 text-sm text-black mt-4">{activeNews.body}</p>
            </div>
        </div>
    );
}