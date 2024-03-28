'use client'

export default function AthleteSport({sport})
{
    return(
        <div className = "sport-list-item-container">
            <p className="text-md font-medium text-red-950 mt-1">{sport}</p>
        </div>
    )
}