import { useEffect } from "react"

export default function AthleteCard({athlete})
{
    return(
        <div className="athlete-card-main-container flex w-[90%] m-2 bg-white py-3 px-4 rounded-xl shadow-lg items-center">
            <div className="w-[35%] mr-1">
                <img src={athlete.picture} alt="jugador" className=""/>
            </div>
            <div className="flex flex-col">
                <p className="font-medium text-sm">{athlete.name}</p>
                {/* <p className="">{athlete.sport}</p> */}
                {/* <p className="">{athlete.pos}</p> */}
            </div>
        </div>
    )
}