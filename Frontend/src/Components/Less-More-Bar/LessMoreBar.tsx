import { useState } from "react"

export default function LessMoreBar({title, text})
{
    const [showingMore, setShowingMore] = useState(false)
    return(
        <div className="w-5/6">
            <div className="border-b-2 border-gray-400 flex flex-between px-3 py-3 align-middle" onClick={()=>setShowingMore(!showingMore)}>
                <h4 className="w-3/4 mr-auto">{title}</h4>
                <img src={showingMore ? "/chevron-down.svg" : "/chevron-right.svg"} alt="" className="w-6" />
            </div>
            <p className={`${showingMore ? 'block' : 'hidden'} p-4`}>{text}</p>
        </div>
    )
}