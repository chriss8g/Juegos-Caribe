'use client'
import { useRef, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import MoreNewsList from "../../Components/MoreNewsList/MoreNewsList";
import NewsCarousel from "../../Components/NewsCarousel/NewsCarousel";

export default function Noticias() {
    

    return (
        <div className="MobileView">
            <Layout>
                <div className="news-main-container">
                    
                    <div className="secondary-sports-container container">

                        
                    <MoreNewsList/>

                    </div>

                </div>
            </Layout>
        </div>
    );
}