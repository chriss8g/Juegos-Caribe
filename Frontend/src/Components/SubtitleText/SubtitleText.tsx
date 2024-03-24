
export default function SubtitleText({title, text})
{
    return(
        
        <div className="mx-6">
            <div className="text-center text-gray-600 pb-3" >
                <h3 className="font-bold text-[#5a1024ac] mt-6">{title}</h3>
            </div>
            <p className={`text mt-2`}>{text}</p>
        </div>
        
    )
}