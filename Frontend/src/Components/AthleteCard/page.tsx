import { useEffect } from "react"

export default function AthleteCard({athlete, onClick})
{
    return(
        <div onClick={onClick} className="athlete-card-main-container flex w-[90%] m-2 bg-white py-0.5 px-4 rounded-xl shadow-lg items-center">
            <div className="w-1/3 p-2">
                <img src={athlete.picture} alt="jugador" className="rounded-lg"/>
            </div>
            <div className="flex flex-col">
                <p className="px-5 font-bold text-lg">{athlete.name}</p>
                {/* <p className="">{athlete.sport}</p> */}
                {/* <p className="">{athlete.pos}</p> */}
            </div>
        </div>
    )
}