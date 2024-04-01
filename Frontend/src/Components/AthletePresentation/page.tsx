

export default function AthletePresentation({Atleta})
{
    return(
        <div className="athlete-presentation-main-container"> 

            <img className="w-2/5 rounded-[10px] mx-auto mt-3" src={Atleta.picture} />
                    
            <h2 className="text-center text-xl font-black text-red-950 mt-2 mb-4">{Atleta.name}</h2>                
        </div>
    )
}