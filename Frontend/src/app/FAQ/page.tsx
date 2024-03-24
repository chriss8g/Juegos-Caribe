'use client'
import Layout from '../../Components/Layout/Layout';
import "../../app/globals.css"
import "./FAQ.css";
import TitleText from '../../Components/TitleText/TitleText';
import SubtitleText from '../../Components/SubtitleText/SubtitleText';
export default function FAQ()
{    
    return(
        <div className="FAQ">
            <Layout>
                <div className="FAQ-main-container MobileView container" >
                    
                    <TitleText title={"Preguntas frecuentes"} text={""}/>

                    <SubtitleText title={"¿Qué son los Juegos Caribe?"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam soluta explicabo, illo mollitia corporis, assumenda non tenetur perspiciatis alias dolor velit nihil consectetur vero veniam dignissimos? Corrupti, neque magnam?"}/> 

                    <SubtitleText title={"¿Cómo surgieron los Juegos Caribe?"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam soluta explicabo, illo mollitia corporis, assumenda non tenetur perspiciatis alias dolor velit nihil consectetur vero veniam dignissimos? Corrupti, neque magnam?"}/>

                    <SubtitleText title={""} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam soluta explicabo, illo mollitia corporis, assumenda non tenetur perspiciatis alias dolor velit nihil consectetur vero veniam dignissimos? Corrupti, neque magnam?"}/>
                    
                    <SubtitleText title={""} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam soluta explicabo, illo mollitia corporis, assumenda non tenetur perspiciatis alias dolor velit nihil consectetur vero veniam dignissimos? Corrupti, neque magnam?"}/>

                    <SubtitleText title={"¿Cuál es el lema de los Juegos Caribe?"} text={"¿Quién vive?... ¡Caribe!... ¿Quién Va?...Universidad!"}/>
                </div>
            </Layout>
        </div>
    )
}
