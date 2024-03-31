'use client'

import "./LittleSportCard.css"
import sports_icons from "../../../public/sportsIcons.json"
import Image from "next/image"
import { useEffect } from "react";

interface SportCardProps {
    sportName: string; 
    sportPicture: string; 
}

const LittleSportCard: React.FC<SportCardProps> = ({sportName, sportPicture}) =>
{

    return(
        <div className="mx-[2.5%] my-[2.5%] w-[20%]">
            <div className="SportCard   p-[5%] lg:p-[2%] lg:my-0 lg:w-1/5 h-16">
                
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