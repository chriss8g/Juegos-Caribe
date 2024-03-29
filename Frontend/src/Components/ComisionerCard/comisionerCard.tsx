export default function ComisionerCard({name, image, posicion})
{

    return(
        <div className="comissioner-card-main-container flex w-[90%] m-2 bg-white py-3 px-4 rounded-xl shadow-lg items-center">
            <div className="w-3/5 mr-1">
                <img src={image} alt="comisionado" className="rounded-lg"/>
            </div>
            <div className="flex flex-col text-start">
                <p className="text-sm font-bold text-black ml-2 mb-1">{name}</p>
                <p className="text-black text-xs ml-2">{posicion}</p>
            </div>
        </div>
    )
}