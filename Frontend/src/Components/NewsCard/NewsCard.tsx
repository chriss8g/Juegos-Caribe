import "../NewsPreview/NewsPreview.css"
import "../../app/globals.css"

export default function NewsCard({news, show})
{

    return(
        <div className={`${show ? "MobileView" : "sec-new-container cursor-pointer lg:w-[95%]"}`}>
            <div className="news-img-container">
                    <img src={news.images} alt="" className="sec-news-img relative"/>

            </div>

            <div className="news-text">
                <p className="font-bold text-xs text-black">{news.title}</p>
                <p className="text-xs mt-1  text-black">{news.body.substring(0, 55)}...</p>
                <p className="news-date mt-[15%]  text-sm">{news.date}</p>
            </div>


        </div>
    )
}