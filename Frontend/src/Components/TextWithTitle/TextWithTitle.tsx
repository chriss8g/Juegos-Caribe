
export default function TextWithTitle({title, text})
{
    return(
        <div className="mx-6">
            <div className="text-center font-bold border-b-2 border-[#5a1024ac] text-gray-600 pb-3 mb-8" >
                <h2 className="" mt-5>{title}</h2>
            </div>
            <p className={`text mt-5`}>{text}</p>
        </div>
    )
}