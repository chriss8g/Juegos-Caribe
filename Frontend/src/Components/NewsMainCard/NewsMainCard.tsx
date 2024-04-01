import "../NewsPreview/NewsPreview.css"
import "../../app/globals.css"
import Image from "next/image"

export default function NewsMainCard({news, show})
{
    //Versión Desktop
    return(
            <div className= {show?"MobileView mb-[5%] rounded-s-[20px] rounded-e-[20px] shadow-lg":"NewsPreview cursor-pointer main-new-container lg:w-[87%]"}>
                <div className="NewsImage relative">
                    <img src={news.picture} alt="" className="image max-h-[200px] rounded-t-xl"/>
                </div>
                <div className="px-[8%] py-[8%] lg:px-[4%]">
                    <h3 className="font-bold text-lg">{news.title}</h3>
                    <p className="text-sm mt-4 text-black">{news.body.substring(0, 200)}...</p>
                    <p className="text-sm text-gray-500 mt-8">{news.date}</p>
                </div>
            </div>
    )
}