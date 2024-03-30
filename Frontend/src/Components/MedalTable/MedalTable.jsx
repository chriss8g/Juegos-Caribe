'use client'
import { useState, useEffect } from "react"
import "./medalTable.css"
import useAdministration from "../../hooks/useAdministration";

import Image from "next/image"
import MedalTableHeader from "../MedalTableHeader/MedalTableHeader";
import MedalTableDesktop from "../MedalTableDesktop/MedalTableDesktop";

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
                <table className="medalsTable">
                    <thead>
                    <tr>
                        <th>Facultades</th>
                        <th>
                            <div className="medalIcon">
                                <Image alt="" src="/goldenMedal.svg" fill className="image"/>
                            </div>
                        </th>
                        <th>
                            <div className="medalIcon">
                                <Image alt="" src="/silverMedal.svg" fill className="image"/>
                            </div>
                        </th>
                        <th>
                            <div className="medalIcon">
                                <Image alt="" src="/bronzeMedal.svg" fill className="image"/>
                            </div>
                        </th>
                        <th>
                            <div className="medalIcon">
                                <Image alt="" src="/allMedals.svg" fill className="image"/>
                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        
                        facultywithMedals.map((element, key)=>(
                            
                            (key < 2) ?
                                <tr className="trow" key={key}>
                                    <td>
                                        <div className="row">
                                            <p>{key+1}</p>
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
                            :(more)?
                                <tr className="trow" key={key}>
                                    <td>
                                        <div className="row">
                                            <p>{key+1}</p>
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
                            :
                            <></>
                        ))
                        
                            
                        
                    }
                    </tbody>

                </table>
                <div className="moreBar font-medium text-lg" onClick={()=>setMore(!more)}>
                    <>
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
                    </>
                </div>
            </div>

            <div className="DesktopView">
                <div className="flex justify-center">
                    <MedalTableHeader/>
                </div>
                <div className="width-90 ml-auto mr-auto">
                    <table className="medalsTable">
                        <thead>
                        <tr>
                            <th>Facultades</th>
                            <th>
                                <div className="medalIcon">
                                    <Image alt="" src="/goldenMedal.svg" fill className="image"/>
                                </div>
                            </th>
                            <th>
                                <div className="medalIcon">
                                    <Image alt="" src="/silverMedal.svg" fill className="image"/>
                                </div>
                            </th>
                            <th>
                                <div className="medalIcon">
                                    <Image alt="" src="/bronzeMedal.svg" fill className="image"/>
                                </div>
                            </th>
                            <th>
                                <div className="medalIcon">
                                    <Image alt="" src="/allMedals.svg" fill className="image"/>
                                </div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {!more ?
                            <>
                                <tr className="trow">
                                    <td>
                                        <div className="row">
                                            <p>1</p>
                                            <div className="logoName">
                                                <Image alt="" src="/lenguas_extranjeras.svg" fill className="image"/>
                                            </div>
                                            <p>FLEX</p>
                                        </div>
                                    </td>
                                    <td className="medalInfo">1</td>
                                    <td className="medalInfo">-</td>
                                    <td className="medalInfo">4</td>
                                    <td className="medalInfo">5</td>
                                </tr>
                                <tr className="trow">
                                    <td>
                                        <div className="row">
                                            <p>2</p>
                                            <div className="logoName">
                                                <Image alt="" src="/farmacia_alimentos.svg" fill className="image"/>
                                            </div>
                                            <p>FARAL</p>
                                        </div>
                                    </td>
                                    <td className="medalInfo">1</td>
                                    <td className="medalInfo">-</td>
                                    <td className="medalInfo">4</td>
                                    <td className="medalInfo">5</td>
                                </tr>
                            </>
                            :
                            <>
                                <tr className="trow">
                                    <td>
                                        <div className="row">
                                            <p>1</p>
                                            <div className="logoName">
                                                <Image alt="" src="/lenguas_extranjeras.svg" fill className="image"/>
                                            </div>
                                            <p>FLEX</p>
                                        </div>
                                    </td>
                                    <td className="medalInfo">1</td>
                                    <td className="medalInfo">-</td>
                                    <td className="medalInfo">4</td>
                                    <td className="medalInfo">5</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="row">
                                            <p>2</p>
                                            <div className="logoName">
                                                <Image alt="" src="/farmacia_alimentos.svg" fill className="image"/>
                                            </div>
                                            <p>FARAL</p>
                                        </div>
                                    </td>
                                    <td className="medalInfo">1</td>
                                    <td className="medalInfo">-</td>
                                    <td className="medalInfo">4</td>
                                    <td className="medalInfo">5</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="row">
                                            <p>1</p>
                                            <div className="logoName">
                                                <Image alt="" src="/lenguas_extranjeras.svg" fill className="image"/>
                                            </div>
                                            <p>FLEX</p>
                                        </div>
                                    </td>
                                    <td className="medalInfo">1</td>
                                    <td className="medalInfo">-</td>
                                    <td className="medalInfo">4</td>
                                    <td className="medalInfo">5</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="row">
                                            <p>2</p>
                                            <div className="logoName">
                                                <Image alt="" src="/farmacia_alimentos.svg" fill className="image"/>
                                            </div>
                                            <p>FARAL</p>
                                        </div>
                                    </td>
                                    <td className="medalInfo">1</td>
                                    <td className="medalInfo">-</td>
                                    <td className="medalInfo">4</td>
                                    <td className="medalInfo">5</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="row">
                                            <p>1</p>
                                            <div className="logoName">
                                                <Image alt="" src="/lenguas_extranjeras.svg" fill className="image"/>
                                            </div>
                                            <p>FLEX</p>
                                        </div>
                                    </td>
                                    <td className="medalInfo">1</td>
                                    <td className="medalInfo">-</td>
                                    <td className="medalInfo">4</td>
                                    <td className="medalInfo">5</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="row">
                                            <p>2</p>
                                            <div className="logoName">
                                                <Image alt="" src="/farmacia_alimentos.svg" fill className="image"/>
                                            </div>
                                            <p>FARAL</p>
                                        </div>
                                    </td>
                                    <td className="medalInfo">1</td>
                                    <td className="medalInfo">-</td>
                                    <td className="medalInfo">4</td>
                                    <td className="medalInfo">5</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="row">
                                            <p>1</p>
                                            <div className="logoName">
                                                <Image alt="" src="/lenguas_extranjeras.svg" fill className="image"/>
                                            </div>
                                            <p>FLEX</p>
                                        </div>
                                    </td>
                                    <td className="medalInfo">1</td>
                                    <td className="medalInfo">-</td>
                                    <td className="medalInfo">4</td>
                                    <td className="medalInfo">5</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="row">
                                            <p>2</p>
                                            <div className="logoName">
                                                <Image alt="" src="/farmacia_alimentos.svg" fill className="image"/>
                                            </div>
                                            <p>FARAL</p>
                                        </div>
                                    </td>
                                    <td className="medalInfo">1</td>
                                    <td className="medalInfo">-</td>
                                    <td className="medalInfo">4</td>
                                    <td className="medalInfo">5</td>
                                </tr>
                            </>
                        }
                        </tbody>

                    </table>

                </div>
                <div className="moreBar ml-auto mr-auto cursor-pointer font-medium text-xl" onClick={() => setMore(!more)}>
                    <>
                        <p>Ver&nbsp;</p>
                        {
                            !more
                                ?
                                <p>Más</p>
                                :
                                <p>Menos</p>
                        }
                        <div className="showMore">
                            <div className="moreImg">
                                <Image alt="" src={more ? "less-red.svg" : "more-red.svg"} fill className="image"/>
                            </div>
                        </div>
                    </>
                </div>
                <MedalTableDesktop/>
            </div>
        </div>
        
        
    )
}