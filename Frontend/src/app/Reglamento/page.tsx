import Layout from "../../Components/Layout/Layout";
import Image from 'next/image'
import "../globals.css"
import "./regulation.css"

export default function Regulation()
{

    return(
        
        <div className="Regulation">
                <Layout>
                <div>
                    
                <h2 className="mb-5 flex justify-center font-bold">Reglamento 2023-2026</h2>
             

                <p><span>Título I.</span> Principios Generales:</p>

                <p><span>Artículo 1:</span> El movimiento deportivo universitario es para el disfrute de la Comunidad Universitaria</p>

                <p><span>Artículo 2:</span> El movimiento deportivo universitario se sustenta sobre la base de los principios de la FEU</p>

                <p><span>Artículo 3:</span> La práctica deportiva en la Universidad deberá ser un movimiento estudiantil promovido, organizado y gestionado por la FEU y por la institución</p>

                <p><span>Artículo 4:</span> La práctica deportiva en la Universidad deberá ser un movimiento estudiantil promovido, organizado y gestionado por la FEU y por la institución</p>

                <p><span>Artículo 5:</span> La práctica     deportiva en la Universidad deberá ser un movimiento estudiantil promovido, organizado y gestionado por la FEU y por la institución</p>

                <p><span>Artículo 6:</span> La práctica deportiva en la Universidad deberá ser un movimiento estudiantil promovido, organizado y gestionado por la FEU y por la institución</p> 
                </div>
                
                <button className="mx-auto w-3/4 border-2 border-slate-600 mt-7 py-1 bg-slate-600 text-white rounded-md flex justify-center">
                    <div className="download">
                        <Image alt="" src="/download.svg" fill className="image"/>
                    </div>
                    <p>
                        Descargar reglamento PDF
                    </p>
                </button>

                <div>
                    <h4>Deportes que participan:</h4>
                </div>

            </Layout>
        </div>
    )
}