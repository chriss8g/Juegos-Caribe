import Layout from "../../Components/Layout/Layout";


export default function AthleteCard(athlete)
{
    //Aqui voy a poner cosas para ir probando. Luego seria cambiar estos por los que vienen de la facultad que se recibe
    const CAthlete =[{
        "id": 1,
        "sport": "Fútbol",
        "name": "Luka Modric",
        "pos": "Medio Campo",
        "image": "/athlete1",
        "number": 16
    },
        {
            "id": 2,
            "sport": "Fútbol",
            "number": 10,
            "name": "Luka Modric",
            "pos": "Medio Campo",
            "image": "/athlete2"
        }
    ]
    return(
        <div className="athelete-main-container">
            <div className="athlete-img-cont w-1/4">
                <img src={CAthlete[0].image} className="w-[100%]" alt={"jugador"}/>
            </div>
            <div className="athlete-desc-container">
                <p className="font-medium">{CAthlete[0].number} {CAthlete[0].name}</p>
                <p>{CAthlete[0].sport}</p>
                <p>{CAthlete[0].pos}</p>
            </div>
        </div>
    )
}