'use client'
import Layout from "../../../Components/Layout/Layout"
import MedalsAtl from "../../../Components/MedalsAtl/page";
import AthleteData from "../../../Components/AthleteData/page";
import AthleteSport from "../../../Components/AthleteSport/page"
import AthletePresentation from "../../../Components/AthletePresentation/page"
import CornerCircle from "../../../Components/RightUpCornerCircle/page"

export default function DetailedAthlete()
{
    const Atleta =[
        {
            "id": 1,
            "name": "Adrián Álvarez",
            "picture": "/AdriánÁlvarez.png",
            "faculty": "MATCOM",
            "grade": "4to año",
            "date": "18 de abril de 2003"
        }];

    const deportes = [
        {
            "name": "Fútbol Sala"
        },
        {
            "name": "Basquet Ball"
        },
        {
            "name": "Voleibol"
        },
        {
            "name": "Judo"
        },
        {
            "name": "Baseball"
        },
        {
            "name": "Cancha"
        }
    ]
        return(
            <Layout>
                

                <div className="MobileView container relative overflow-hidden ">
                    <CornerCircle/>

                    <AthletePresentation Atleta={Atleta}/>        

                    <AthleteData Data={Atleta[0]}/>
                    
                    <p className="text-center text-xl font-black text-red-950 mt-6">{"Estadísticas"}</p>
                    
                    <MedalsAtl/>

                    <h2 className="text-start text-md font-black text-red-950 mt-6">Deportes</h2>
                    
                    <div className="columns-2 pb-12">
                        {
                            deportes.map((sport, key)=>
                            (
                                <AthleteSport key={key} sport={sport.name}/>
                            ))
                        }
                    </div>
                </div>
            </Layout>
    )
}
