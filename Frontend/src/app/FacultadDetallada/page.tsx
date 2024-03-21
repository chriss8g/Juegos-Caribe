import Layout from "../../Components/Layout/Layout";
import AthleteCard from "../../Components/AthleteCard/page";


export default function FacultadDetallada(facultad)
{
    //Aqui voy a poner cosas para ir probando. Luego seria cambiar estos por los que vienen de la facultad que se recibe
    const Cfacultad =[{
        "id": 1,
        "str": "MATCOM",
        "name": "Matemática y Computación",
        "logo": "/matcom.svg"
    },
        {
            "id": 2,
            "str": "INSTEC",
            "name": "Instituto de Ciencias y Tecnologías Aplicadas ",
            "logo": "/instec.svg"
        }
    ]
    return(
        <div className="facultad-det-main-container MobileView">
           <Layout>
               <div className="presentacion-facultad flex justify-center flex-col items-center">
                   <img src={Cfacultad[1].logo} className="w-1/2" alt="logo de la facultad"/>
                    <p className="text-gray-500 text-2xl text-center px-3 font-bold">{Cfacultad[1].name}</p>
                   <p className="text-red-950 text-lg text-cetner px-3 mt-7 font-medium">Atletas destacados</p>
                   <AthleteCard/>
               </div>

           </Layout>
        </div>
    )
}