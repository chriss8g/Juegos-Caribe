'use client'
import { useState, useEffect } from "react"
import "./medalTable.css"
import useAdministration from "../../hooks/useAdministration";

import Image from "next/image"
import MedalTableHeader from "../MedalTableHeader/MedalTableHeader";
import MedalTableDesktop from "../MedalTableDesktop/MedalTableDesktop";
import ExportToPDFButton from "../ExportButton/ExportButton";


export default function MedalTable()
{
    const{getData, Data} = useAdministration()

    useEffect(()=>{
        getData(`${process.env.API_URL}/faculty/medals`)
    },[])

    const [facultywithMedals, setFacultywithMedals] = useState([])

    useEffect(()=>{
        setFacultywithMedals(Data);
    },[Data]);

    const [more, setMore] = useState(false)

    return(
        facultywithMedals.length > 0 &&
        <div className="MedalTable">
            <div className="MobileView container">
                <MedalTableHeader/>
                <table className="medalsTable mb-5" id="medalTableHome">
                    <thead className="border-solid border-b-2">
                        <th className="">
                            <h3 className="py-2">Facultades</h3>
                        </th>
                        <th>
                            <div className="medalIcon pt-2">
                                <Image alt="" src="/goldenMedal.svg" fill className="image"/>
                            </div>
                        </th>
                        <th>
                            <div className="medalIcon pt-2">
                                <Image alt="" src="/silverMedal.svg" fill className="image"/>
                            </div>
                        </th>
                        <th>
                            <div className="medalIcon pt-2">
                                <Image alt="" src="/bronzeMedal.svg" fill className="image"/>
                            </div>
                        </th>
                        <th>
                            <div className="medalIcon pt-2">
                                <Image alt="" src="/allMedals.svg" fill className="image"/>
                            </div>
                        </th>
                    </thead>
                    <tbody>
                    {
                        
                        facultywithMedals.slice(0, more ? facultywithMedals.length : 3).map((element, key)=>(
                            <tr className="trow" key={key}>
                                <td>
                                    <div className="flex items-center px-3 py-2">
                                        <p className={`${(key+1==1)? '!text-[#FFD700]' : 
                                                (key+1==2 ? 
                                                    '!text-[#71706E]' : 
                                                    (key+1==3 ?
                                                        '!text-[#CD7F32]' : 
                                                            '!text-black'))}`}>{key+1}.</p>

                                        <div className="logoName">
                                            <Image alt="" src={element.logo} fill className="image"/>
                                        </div>
                                        <p>{element.faculty}</p>
                                    </div>
                                </td>
                                <td className="medalInfo">{element.medals['Oro']?element.medals['Oro']: '-'}</td>
                                <td className="medalInfo">{element.medals['Plata']?element.medals['Plata']: '-'}</td>
                                <td className="medalInfo">{element.medals['Bronce']?element.medals['Bronce']: '-'}</td>
                                <td className="medalInfo">{element.total}</td>
                            </tr>
                        ))
                        
                    }
                    </tbody>

                </table>
                    {
                        facultywithMedals.length > 3 &&
                        <div className="moreBar font-medium text-lg" onClick={()=>setMore(!more)}>
                            <p>Ver &nbsp;</p>
                            {
                                !more
                                    ?
                                    <p>más</p>
                                    :
                                    <p>menos</p>
                            }
                            <div className="showMore cursor-pointer">
                                <div className="moreImg" >
                                    <Image alt="" src={more ? "less-red.svg" : "more-red.svg"}  fill className="image"/>
                                </div>
                            </div>
                        </div>
                    }
            </div>

            
            < ExportToPDFButton input={document.getElementById("medalTableHome")}/>
        </div>
        
        
    )
}