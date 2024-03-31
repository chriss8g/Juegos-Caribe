'use client'

interface SportCardProps {
    sportName: string; 
    sportPicture: string; 
}

const LittleSportCard: React.FC<SportCardProps> = ({sportName, sportPicture}) =>
{

    return (
        <div className="sport-images-container w-[100%] mt-2 relative">
            <div className="sport-img-main-container">
                <img src={sportPicture} alt="Sport" className="rounded-b-xl"/>
            </div>
            <div
                className="sport-logo h-[100%] w-[28%] ml-0 absolute left-0 bottom-0 rounded-r-[50%] backdrop-blur-[1px] bg-[#00000078] flex flex-col items-center justify-center pr-10">
                <img src={sportPicture} alt="logo del deporte" className=" w-1/2"/>
                <p className="text-white font-bold text-2xl mt-1 ml-5">{sportName}</p>
                <p className="text-white font-medium text-xs mt-0.5 ml-1">texto prueba</p>
            </div>
        </div>

    )
}
export default LittleSportCard; 