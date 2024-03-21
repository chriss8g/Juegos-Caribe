export default function AthleteCard(athlete)
{
    const CAthlete =[
        {
            "id": 1,
            "sport": "Fútbol",
            "name": "Luka Modric Ramírez",
            "imagen": "/athlete1.png",
            "pos": "Medio Campo",
            "num": 10
        }]

    return(
        <div className="athlete-card-main-container flex w-[90%] m-2 bg-white py-3 px-6 rounded-xl shadow-lg items-center">
            <div className="w-[35%]">
                <img src={CAthlete[0].imagen} alt="jugador" className=""/>
            </div>
            <div className="flex flex-col">
                <p className="font-medium text-sm">{CAthlete[0].num} {CAthlete[0].name}</p>
                <p className="">{CAthlete[0].sport}</p>
                <p className="">{CAthlete[0].pos}</p>
            </div>
        </div>
    )
}