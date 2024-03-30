'use client'
import Image from "next/image"
import "./medalsFac.css";
export default function MedalsFac()
{

    return(
        <div className="MobileView">
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
                                        <p>10</p>
                                    </div>
                                </td>
                                <td className="medalInfo">1</td>
                                <td className="medalInfo">-</td>
                                <td className="medalInfo">4</td>
                                <td className="medalInfo">5</td>
                            </tr>

                        </>

                    </tbody>

                </table>

            </div>
        </div>
    )
}