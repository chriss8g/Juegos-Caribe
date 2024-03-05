import NewsPreview from "../NewsPreview/NewsPreview"
import NewsCard from "../NewsMainCard/NewsMainCard"
import NewsMainCard from "../NewsMainCard/NewsMainCard";

export default function RelevantNews()
{
    const News =[{
            "id": "1",
            "title": "Hoy se presenció el partido más reñido de la historia de los Caribe",
            "sport": "Badminton",
            "images": ["/newsTest.png"],
            "date": "13 DICIEMBRE, 2023",
            "author": "Frank Perez",
            "news": "Durante el día martes el Instituto de Diseño y la Facultad de Contabilidad y Finanzas blablablablablablablablabla"
        },
        {
            "id": "2",
            "title": "El atletismo femenino nos brindó una gran competencia.",
            "sport": "Atletismo",
            "images": ["/newsTest.png"],
            "date": "28 DICIEMBRE, 2023",
            "author": "Frank Perez",
            "news": "Durante el día martes el Instituto de Diseño y la Facultad de Contabilidad y Finanzas blablablablablablablablabla"
        }]
    
    return(
        <div className="RelevantNews container">
            <h2 className="sectionTitle  lg:text-3xl lg:font-bold">Noticias Relevantes</h2>

            {/* Versión Móvil */}
            {
                News.map((news)=>
                (
                    <NewsMainCard key={news.id} news={news} show={true}/>
                ))
            }
             {/* Versión Desktop */}
            {
                <div className="NewsPreview DesktopView lg:flex lg:justify-between">
                    <NewsMainCard news={News[0]} show={false}/>
                </div>
}

</div>
)
}