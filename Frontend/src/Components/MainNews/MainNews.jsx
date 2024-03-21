'use client'
import "./MainNews.css"
import Image from "next/image"

export default function MainNews({news})
{
    return(

    <div class="main-news-container relative w-[100%] mb-2 pt-[27%] pb-[2%]">
            <p class="text-white text-xl font-bold ml-5 mr-10">{news.title}</p>
            <p class="text-white text-lg font-medium ml-5 mr-10">por {news.author}</p>
    </div>
)
}