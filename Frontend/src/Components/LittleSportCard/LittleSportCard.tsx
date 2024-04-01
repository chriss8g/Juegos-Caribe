'use client'

import "./LittleSportCard.css"
import Image from "next/image"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface SportCardProps {
    sportName: string; 
    sportPicture: string; 
}

const LittleSportCard: React.FC<SportCardProps> = ({sportName, sportPicture}) =>
{

    const router = useRouter();
    return(
        <div className="mx-auto min-w-1/4 p-3" onClick={()=>router.push("/Deportes/"+sportName)}>
            <div className="SportCard p-3">
                
            <div className="circle-container">
                <div className="flex justify-center align-center">
                    <div className="sportImage">
                        <Image src={sportPicture} alt="" fill className="image"/>
                    </div>
                </div>
            </div>  
            </div>
            <p className="circle-container mt-2 mb-5 text-m txt text-gray-600">{sportName}</p>
        </div>
        
    )
}
export default LittleSportCard; 