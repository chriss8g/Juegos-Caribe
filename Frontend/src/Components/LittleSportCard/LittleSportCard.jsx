'use client'

import "./LittleSportCard.css"
import sports_icons from "../../../public/sportsIcons.json"
import Image from "next/image"
export default function LittleSportCard({sportName})
{
    
    return(
        <div className="mx-[2.5%] my-[2.5%] w-[20%]">
            <div className="SportCard   p-[5%] lg:p-[2%] lg:my-0 lg:w-1/5">
                {
                    sports_icons.map((sport, index)=>
                    {
                        if(sport.name === sportName)
                        {
                            return(
                                <div key={index} className="circle-container">
                                    <div className="circle flex justify-center align-center">
                                        <div className="sportImage">
                                            <Image src={sport.icon} alt="" fill className="image"/>
                                        </div>
                                    </div>
                                        
                                </div>
                            )
                        }
                    })
                }
            </div>
            <p className="circle-container lg:mt-3 text-m txt text-gray-600">{sportName}</p>
        </div>
        
    )
}