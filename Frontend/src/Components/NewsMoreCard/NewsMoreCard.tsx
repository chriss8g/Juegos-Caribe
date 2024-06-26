import "../NewsPreview/NewsPreview.css"
import "../../app/globals.css"

export default function NewsMoreCard({secNews})
{

    return(
        <div className="cursor-pointer mb-10 rounded-xl shadow-lg">
            <div className="news-img-container">
                <img src={secNews.picture} alt="" className="sec-news-img relative rounded-xl"/>

            </div>

            <div className="p-[3%]">
                <p className="font-bold text-sm text-red-950 mr-5 pt-1">{secNews.title}</p>
                <p className="text-red-950 text-sm font-medium pt-0.5">por {secNews.user}</p>
                <p className="text-sm pt-1 text-red-950">{secNews.date}</p>
            </div>


        </div>
    )
}