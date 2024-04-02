
export default function SubtitleText({title, text})
{
    return(
        
        <div className="mx-6">
            <div className="text-center text-gray-600 pb-3" >
                <h3 className="font-bold text-red-950 mt-6">{title}</h3>
            </div>
            <p className={`text mt-2 text-start`}>{text}</p>
        </div>
        
    )
}