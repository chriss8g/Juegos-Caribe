'use client'
import Layout from '../../Components/Layout/Layout';
import "../../app/globals.css"
import "./FAQ.css";
import TextWithTitle from '../../Components/TextWithTitle/TextWithTitle';
import TextWithTitle2 from '../../Components/TextWithTitle2/TextWithTitle2';
export default function FAQ()
{    
    return(
        <div className="FAQ">
            <Layout>
                <div className="FAQ-main-container MobileView container" >
                    
                    <TextWithTitle title={"Preguntas frecuentes"} text={""}/>

                    <TextWithTitle2 title={"¿Qué son los Juegos Caribe?"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam soluta explicabo, illo mollitia corporis, assumenda non tenetur perspiciatis alias dolor velit nihil consectetur vero veniam dignissimos? Corrupti, neque magnam?"}/> 

                    <TextWithTitle2 title={"¿Cómo surgieron los Juegos Caribe?"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam soluta explicabo, illo mollitia corporis, assumenda non tenetur perspiciatis alias dolor velit nihil consectetur vero veniam dignissimos? Corrupti, neque magnam?"}/>

                    <TextWithTitle2 title={""} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam soluta explicabo, illo mollitia corporis, assumenda non tenetur perspiciatis alias dolor velit nihil consectetur vero veniam dignissimos? Corrupti, neque magnam?"}/>
                    
                    <TextWithTitle2 title={""} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam soluta explicabo, illo mollitia corporis, assumenda non tenetur perspiciatis alias dolor velit nihil consectetur vero veniam dignissimos? Corrupti, neque magnam?"}/>

                    <TextWithTitle2 title={"¿Cuál es el lema de los Juegos Caribe?"} text={"¿Quién vive?... ¡Caribe!... ¿Quién Va?...Universidad!"}/>
                </div>
            </Layout>
        </div>
    )
}
