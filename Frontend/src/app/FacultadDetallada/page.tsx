import Layout from "../../Components/Layout/Layout";
import AthleteCard from "../../Components/AthleteCard/page";
import {Result} from "postcss";
import Results from "../../Components/Results/page";

export default function FacultadDetallada(facultad)
{
    const CFacultad =[
        {
            "id": 1,
            "str": "INSTEC",
            "name": "Instituto de Ciencias y Tecnologías Aplicadas.",
            "logo": "/instec.svg"
        }]

    return(
        <div className="fac-det-main-container MobileView">
            <Layout>
                <div className="flex flex-col items-center justify-center">
                    <img src={CFacultad[0].logo} alt="logo de la facultad" className="w-1/2"/>
                    <p className="text-gray-500 font-bold text-2xl px-3 text-center">{CFacultad[0].name}</p>
                    <p className="text-red-950 font-medium text-lg mt-7">Atletas destacados</p>

                    <AthleteCard/>

                    <p className="text-red-950 font-medium text-lg mt-7">Deportes que participan:</p>

                    <p className="text-black font-medium text-lg mt-7">Medallero</p>

                    <p className="text-black font-medium text-lg mt-7">Resultados</p>

                    <Results/>

                </div>


            </Layout>

        </div>
    )
}