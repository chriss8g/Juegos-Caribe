'use client'
import Image from "next/image"
import "./medalsAtl.css";
export default function MedalsAtl()
{
    return(
        <div className="">
            <div className="athlete-table-main-container flex justify-center shadow-lg rounded-xl border-t-white mt-3">
                <table className="athlete-medal-table border-separate border-spacing-y-3">
                    <thead className="">
                    <tr>
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
                                <td className="medalInfo px-8">1</td>
                                <td className="medalInfo px-8">-</td>
                                <td className="medalInfo px-8">4</td>
                                <td className="medalInfo px-8">5</td>
                            </tr>

                        </>

                    </tbody>

                </table>

            </div>
        </div>
    )
}