'use client'

export default function AthleteData({Data})
{
    const data = [
        {
            "id": 1,
            "name": "Adrián Sirenoman",
            "picture": "/Adrián.jpg",
            "faculty": "MATCOM",
            "grade": "4to año",
            "date": "18 de abril de 2003"
        }
    ]
    return(
        <div className="">
            <div className="flex">
                <p className="font-bold text-red-950 mr-2">Fecha de nacimiento:</p>
                <p className="font-md text-red-950 ">{data[0].date}</p>
            </div>
            <div className="flex">
                <p className="font-bold text-red-950 mr-2">Facultad:</p>
                <p className="font-md text-red-950 ">{data[0].faculty}</p>
            </div>
            <div className="flex">
                <p className="font-bold text-red-950 mr-2">Año:</p>
                <p className="font-md text-red-950 ">{data[0].grade}</p>
            </div>
        </div>
    )
}       