'use client'

export default function AthleteData({data})
{
    
    return(
        <div className="">
            <div className="flex">
                <p className="font-bold text-red-950 mr-2">Ocupación:</p>
                <p className="font-md text-red-950 ">{data.ocupation}</p>
            </div>
            <div className="flex">
                <p className="font-bold text-red-950 mr-2">Facultad:</p>
                <p className="font-md text-red-950 ">{data.faculty}</p>
            </div>
        </div>
    )
}       