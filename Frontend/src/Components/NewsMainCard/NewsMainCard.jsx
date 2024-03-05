import "../NewsPreview/NewsPreview.css"
import Image from "next/image"
import NewsCard from "../NewsCard/NewsCard";

export default function NewsMainCard({news, show})
{
    //Versión Desktop
    return(
            <div className= {show?"MobileView":"NewsPreview main-new-container lg:w-[54%]"}>
                <div className="NewsImage">
                    <Image src="/newsTest.png" alt="" fill className="image"/>
                </div>
                <div className="sportLabel">
                    <p>{news.sport}</p>
                </div>
                <div className="newsInfo">
                    <h3>{news.title}</h3>
                    <p>{news.news.substring(0, 85)}...</p>
                    <p className="date">{news.date}</p>
                </div>
            </div>
    )
}