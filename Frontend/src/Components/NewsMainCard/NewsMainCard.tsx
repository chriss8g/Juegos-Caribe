import "../NewsPreview/NewsPreview.css"
import "../../app/globals.css"
import Image from "next/image"

export default function NewsMainCard({news, show})
{
    //Versión Desktop
    return(
            <div className= {show?"MobileView mb-[5%] rounded-s-[20px] rounded-e-[20px] shadow-lg":"NewsPreview cursor-pointer main-new-container lg:w-[87%]"}>
                <div className="NewsImage relative">
                    <img src={show ? news.images[0] : news.images[1]} alt="" className="image"/>
                    <div className="sportLabel text-xs lg:text-sm sport-label-generic">
                        <p>{news.sport}</p>
                    </div>
                </div>
                <div className="px-[8%] py-[8%] lg:px-[4%]">
                    <h3 className="font-bold text-xl">{news.title}</h3>
                    <p className="text-sm mt-[2%] text-black">{news.news.substring(0, 200)}...</p>
                    <p className="date">{news.date}</p>
                </div>
            </div>
    )
}