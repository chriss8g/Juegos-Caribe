'use client'

import "./SportCard.css"
import sports_icons from "../../../public/sportsIcons.json"
import Image from "next/image"
export default function SportCard({sportName}, {sportPicture})
{
    
    return(
        <div className="SportCard w-[45%] my-[5%] mx-[2.5%] p-[5%] lg:p-[2%] lg:my-0 lg:w-1/5">
            {
                
                <div className="circle-container">
                    <div className="circle flex justify-center align-center">
                        <div className="sportImage">
                            <Image src={sportPicture} alt="" fill className="image"/>
                        </div>
                    </div>
                        <p className="lg:mt-3 text-xl font-semibold text-rose-950">{sportName}</p>
                </div>
                        
            }
        </div>
    )
}