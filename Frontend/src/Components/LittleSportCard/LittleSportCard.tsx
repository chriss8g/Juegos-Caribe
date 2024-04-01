'use client'
import "./LittleSportCard.css"
import Image from "next/image"

interface SportCardProps {
    sportName: string; 
    sportPicture: string; 
}

const LittleSportCard: React.FC<SportCardProps> = ({sportName, sportPicture}) =>
{

    return(
        <div className="w-full SportCard flex flex-col py-2">
            <div className="circle-container">
                <div className="flex justify-center align-center">
                    <div className="sportImage">
                        <Image src={sportPicture} alt="" fill className="image "/>
                    </div>
                </div>
            </div>  
            <p className="circle-container mt-2 mb-2 text-m txt text-gray-600">{sportName}</p>
        </div>
        
    )
}
export default LittleSportCard; 