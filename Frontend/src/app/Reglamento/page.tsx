'use client'
import Layout from "../../Components/Layout/Layout";
import Image from 'next/image'
import "../globals.css"
import "./regulation.css"
import LessMoreBar from "../../Components/Less-More-Bar/LessMoreBar";

export default function Regulation()
{
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad doloremque vero obcaecati, iure illo blanditiis ut aliquam recusandae assumenda itaque ea saepe minima maxime perferendis sit aperiam quidem a et?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod optio facere accusantium voluptatum commodi, nobis nulla eaque illum nisi sed non. At minus voluptas in ad consequatur dolorem sapiente cum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati iste earum molestias saepe veritatis eveniet perspiciatis quaerat magni explicabo, id tempore facilis minima commodi necessitatibus nihil nulla, debitis consequatur suscipit."

    return(
        <Layout>
        <div className="Regulation mx-3">
                
                <div>
                <h2 className="mb-5 flex justify-center font-bold text-gray-500 my-8">Reglamento 2023-2026</h2>
             

                <p><span>Título I.</span> Principios Generales:</p>

                <p><span>Artículo 1:</span> El movimiento deportivo universitario es para el disfrute de la Comunidad Universitaria</p>

                <p><span>Artículo 2:</span> El movimiento deportivo universitario se sustenta sobre la base de los principios de la FEU</p>

                <p><span>Artículo 3:</span> La práctica deportiva en la Universidad deberá ser un movimiento estudiantil promovido, organizado y gestionado por la FEU y por la institución</p>

                <p><span>Artículo 4:</span> La dirección de la FEU de conjunto con la
                                            dirección de las Facultades, definirán a los
                                            deportistas que los representarán en las
                                            diferentes competencias.</p>

                <p><span>Artículo 5:</span> Los principios que sustentan el presente
                                            reglamento, así como las normas y regulaciones
                                            establecidas deberán ser de ESTRICTO
                                            CUMPLIMIENTO por parte de los deportistas, las
                                            organizaciones, los estudiantes en calidad de
                                            público y la institución en todos los niveles de
                                            competición.</p>

                <p><span>Artículo 6:</span> El incumplimiento de los principios, normas
                                            y regulaciones establecidas conllevará a la
                                            imposición de sanciones.</p> 
                </div>
                
                <button className="mx-auto w-3/4 border-2 border-slate-600 mt-7 py-1 bg-slate-600 text-white rounded-md flex justify-center">
                    <div className="download">
                        <Image alt="" src="/download.svg" fill className="image"/>
                    </div>
                    <p>
                        Descargar reglamento PDF
                    </p>
                </button>
                
                <div className="mx-2 mb-20">
                <div>
                    <h4 className="vino flex justify-center mt-10">Deportes que participan:</h4>

                    <h4 className="vino flex justify-center mt-6 border-b-2 border-[#5a1024]">Colectivos</h4>
                </div>

                
                <LessMoreBar title={"Beisbol"} text={text}/>
                <LessMoreBar title={"FutSal"} text={text}/>
                <LessMoreBar title={"Bascket 3x3"} text={text}/>
                <LessMoreBar title={"Futbol11"} text={text}/>
                <LessMoreBar title={"Volibol"} text={text}/>
                </div>
                

            
        </div>
        </Layout>
    )
}