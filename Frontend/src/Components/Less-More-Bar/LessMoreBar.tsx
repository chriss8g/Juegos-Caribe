import { useState } from "react"

export default function LessMoreBar({title, text})
{
    const [showingMore, setShowingMore] = useState(false)
    return(
        <div className="">
            <div className="border-b-2 border-gray-400 flex flex-between px-3 py-3 align-middle" onClick={()=>setShowingMore(!showingMore)}>
                <h2 className="w-3/4 mr-auto">{title}</h2>
                <img src="/less.svg" alt="" className={`w-6 ${showingMore ? 'rotate-0' : 'rotate-180'}`}/>
            </div>
            <p className={`${showingMore ? 'block' : 'hidden'} p-4`}>{text}</p>
        </div>
    )
}