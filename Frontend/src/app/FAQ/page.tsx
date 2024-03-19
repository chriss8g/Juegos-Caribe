'use client'
import Layout from '../../Components/Layout/Layout';
import "../../app/globals.css"
import "./FAQ.css";

export default function FAQ()
{    
    return(
        <div className="FAQ">
            <Layout>
                <div className="FAQ-main-container MobileView" >
                    <p className='text-3xl text-gray-600 font-bold mb-5 mt-[5%] faq-text' >Preguntas frecuentes</p>

                    <p className='text-header mb-5 mt-6'>¿Qué son los Juegos Caribe?</p>

                    <p className='text-raw mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam soluta explicabo, illo mollitia corporis, assumenda non tenetur perspiciatis alias dolor velit nihil consectetur vero veniam dignissimos? Corrupti, neque magnam?</p>

                    <p className='text-header mb-5'>¿Cómo surgieron los Juegos Caribe?</p>

                    <p className='text-raw mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam soluta explicabo, illo mollitia corporis, assumenda non tenetur perspiciatis alias dolor velit nihil consectetur vero veniam dignissimos? Corrupti, neque magnam?</p>

                    <p className='text-raw mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam soluta explicabo, illo mollitia corporis, assumenda non tenetur perspiciatis alias dolor velit nihil consectetur vero veniam dignissimos? Corrupti, neque magnam?</p>

                    <p className='text-raw mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam soluta explicabo, illo mollitia corporis, assumenda non tenetur perspiciatis alias dolor velit nihil consectetur vero veniam dignissimos? Corrupti, neque magnam?</p>

                    <p className='text-header mb-5'>¿Cuál es el lema de los Juegos Caribe?</p>
                    
                    <p className='text-raw mb-5'>¿Quién vive?... ¡Caribe!... ¿Quién Va?...Universidad!</p>
                    
                </div>
            </Layout>
        </div>
    )
}
