export default function AthleteCard({athlete})
{


    return(
        <div className="athlete-card-main-container flex w-[90%] m-2 bg-white py-3 px-4 rounded-xl shadow-lg items-center">
            <div className="w-[35%] mr-1">
                <img src={athlete[0].imagen} alt="jugador" className=""/>
            </div>
            <div className="flex flex-col">
                <p className="font-medium text-sm">{athlete[0].num} {athlete[0].name}</p>
                <p className="">{athlete[0].sport}</p>
                <p className="">{athlete[0].pos}</p>
            </div>
        </div>
    )
}