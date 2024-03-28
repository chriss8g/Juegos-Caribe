import "../../app/globals.css"
import NewsCard from "../NewsCard/NewsCard"
import NewsMainCard from "../NewsMainCard/NewsMainCard";

export default function RelevantNews()
{
    const News =[{
            "id": "1",
            "title": "Hoy se presenció el partido más reñido de la historia de los Caribe",
            "sport": "Badminton",
            "images": ["/main-news.png", "/main-news.png"],
            "date": "13 DICIEMBRE, 2023",
            "author": "Frank Perez",
            "news": "Durante el día martes el Instituto de Diseño y la Facultad de Contabilidad y Finanzas blablablablablablablablabla"
        },
        {
            "id": "2",
            "title": "El atletismo femenino nos brindó una gran competencia.",
            "sport": "Atletismo",
            "images": ["/main-news.png", "/sec-news-1.png"],
            "date": "28 DICIEMBRE, 2023",
            "author": "Frank Perez",
            "news": "Los Vikingos y los lobos este jueves se destacaron en blablablablablablablablabla"
        },
        {
            "id": "3",
            "title": "Pedro Rubio obtiene la victoria en la competencia",
            "sport": "Maratón",
            "images": ["/main-news.png", "/sec-news-2.png"],
            "date": "28 DICIEMBRE, 2023",
            "author": "Frank Perez",
            "news": "El estudiante de derecho rompe el record de tiempo actual lorem ipsum dolor sit amet..."
        },
        {
            "id": "4",
            "title": "Mapaches y Lobos se enfrentan en el beisbol",
            "sport": "Beisbol",
            "images": ["/main-news.png", "/sec-news-3.png"],
            "date": "28 DICIEMBRE, 2023",
            "author": "Frank Perez",
            "news": "El estudiante de derecho rompe el record de tiempo actual lorem ipsum dolor sit amet..."
        }
        ]
    
    return(
        <div className="RelevantNews container">
            <h2 className="sectionTitle  text-3xl font-bold">Noticias relevantes</h2>

            {/* Versión Móvil */}
            {
                News.map((news)=>
                (
                    <NewsMainCard key={news.id} news={news} show={true}/>
                ))
            }
             {/* Versión Desktop */}

            <div className="DesktopView lg:flex lg:justify-between">
                <NewsMainCard news={News[0]} show={false}/>

                <div className="flex items-end flex-col justify-between">
                    {
                        News.slice(1).map((news, index, array) =>
                            (
                                <NewsCard
                                    key={news.id}
                                    news={news}
                                    show={false}
                                    last={index === array.length - 1 ? "mb-0"  :"mb-[4%]"}
                                />
                            ))
                    }
                </div>

            </div>


        </div>
    )
}