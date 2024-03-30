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
                <LessMoreBar title={"Ajedrez"} text={"Cada equipo estará representado por seis atletas en total, tres jugadores y tres suplentes. Cada equipo (por sexo) podrá participar hasta con tres atletas, que serán definidos antes de iniciar cada jornada."}/>
                <LessMoreBar title={"Baloncesto"} text={"Se realizará una siembra de los ocho primeros lugares del Caribe anterior, el resto se hará por sorteo en el congresillo técnico del Pre- caribe. Cada equipo estará integrado por un máximo de 17 jugadores y un mínimo de 5 jugadores."}/>
                <LessMoreBar title={"Baloncesto 3x3"} text={"Cada equipo estará compuesto por 6 jugadores (4 jugadores en cancha y 2 sustitutos). Un lanzamiento de moneda determinará cual equipo tendrá la primera posesión al inicio del partido y al inicio de un posible tiempo adicional."}/>
                <LessMoreBar title={"Balonmano"} text={"Se realizará una siembra de los ocho primeros lugares del Caribe anterior, el resto se hará por sorteo en el congresillo técnico del Pre- Caribe. Cada equipo estará integrado por un máximo de 16 jugadores y un mínimo de 4 jugadores."}/>
                <LessMoreBar title={"Béisbol"} text={"Los juegos tendrán una duración de dos horas o 7 entradas, con excepción de los partidos de semi-final y final, los cuales solo serán por entradas. Los equipos estarán integrados por un máximo de 18 jugadores y un mínimo de 9 jugadores."}/>
                <LessMoreBar title={"Béisbol 5"} text={"Los equipos estarán integrado por 8 jugadores mixtos (5 varones 3 hembras) jugando 3 varones y dos hembras. Se juega a 5 entrada, cada entrada a 3 out y existe la regla Shirley en caso de empate al finalizar el 5 innig."}/>
                <LessMoreBar title={"Futbol"} text={"Se realizará una siembra de los ocho primeros lugares del Caribe anterior, el resto se hará por sorteo en el congresillo técnico de los Pre- Caribe. Se podrán inscribir hasta 22 atletas por Facultad."}/>
                <LessMoreBar title={"Futsal"} text={"Cada facultad podrá inscribir hasta 16 atletas como máximo y 4 como mínimo. Sólo podrán participar 12 jugadores en cada partido, los cuales podrán ser iniciados con 3 jugadores por equipo."}/>
                <LessMoreBar title={"Polo acuático"} text={"Los equipos femeninos y masculinos estarán integrados por un mínimo de 7 atletas y un máximo de 15. Para iniciar partido deben estar presentes al menos 5 jugadores."}/>
                <LessMoreBar title={"Softbol"} text={"Los equipos estarán integrados por 18 jugadoras como máximo y 9 como mínimo. Los juegos tendrán una duración de 1 hora 15 min independientemente de la entrada en que se encuentre o 5 innings, con excepción de los partidos de semi-final."}/>
                <LessMoreBar title={"Voleibol"} text={"Los equipos están integrados por 17 jugadores como máximo y 6 como mínimo. Sólo podrán participar 12 jugadores en cada partido."}/>
                <LessMoreBar title={"Voleibol de playa"} text={"Cada equipo podrá estar integrado por tres jugadores, pero los que inician el primer set tienen que terminar el partido. Se realizará una siembra de los 8 primeros lugares del Caribe anterior, el resto se hará por sorteo en el Congresillo Técnico."}/>
                
                </div>
                

            
        </div>
        </Layout>
    )
}