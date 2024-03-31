'use client'
import Image from "next/image"
import "./medalsFac.css";
import useAdministration from "../../hooks/useAdministration";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function MedalsFac({facultyId})
{
    const{getDataByIdFromEndpoint, DataByIdFromEndpoint} = useAdministration()


    useEffect(()=>{
        getDataByIdFromEndpoint(+facultyId, "/faculty/medals")
    },[])

    const[info, setInfo] = useState<Medals>();

    useEffect(()=>{
        setInfo(DataByIdFromEndpoint as unknown as Medals);
    },[DataByIdFromEndpoint]);

    return(
        info &&
        <div className="MobileView">
            <p className="text-black font-medium text-lg mt-7">Medallero</p>
            <div className="fac-medals-main-container flex justify-center">
                <table className="medalsTable border-separate border-spacing-y-3">
                    <thead className="fac-table-header">
                    <tr>
                        <th className="mr-5">Posición</th>
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

                        <>
                            <tr className="trow">
                                <td>
                                    <div className="row">
                                        <p>{info["points"]}</p>
                                    </div>
                                </td>
                                <td className="medalInfo">{info.medals['Oro']?   info.medals['Oro']: '-'}</td>
                                <td className="medalInfo">{info.medals['Plata']? info.medals['Plata']: '-'}</td>
                                <td className="medalInfo">{info.medals['Bronce']?info.medals['Bronce']: '-'}</td>
                                <td className="medalInfo">{info["total"]}</td>
                            </tr>
                        </>

                    </tbody>

                </table>

            </div>
        </div>
    )
}