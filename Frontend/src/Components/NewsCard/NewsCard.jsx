import "../NewsPreview/NewsPreview.css"
import "../../app/globals.css"

export default function NewsCard({news, show, last})
{

    return(
        <div className={`${show ? "MobileView" : "sec-new-container cursor-pointer lg:w-[95%]"} ${last}`}>
            <div className="news-img-container">
                    <img src={news.picture} alt="" className="sec-news-img relative"/>
                {/* <div className="sport-label sport-label-generic">
                    <p className="text-xs p-[1%]">{news.sport}</p>
                </div> */}
            </div>

            <div className="news-text">
                <p className="font-bold text-xs text-black">{news.title}</p>
                <p className="text-xs mt-1  text-black">{news.body.substring(0, 55)}...</p>
                <p className="news-date mt-[15%]  text-sm">{news.date}</p>
            </div>
        </div>
    )
}