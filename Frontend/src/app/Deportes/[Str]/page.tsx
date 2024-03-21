'use client'
import React from "react";
import {useParams} from "next/navigation"
import Layout from "../../../Components/Layout/Layout";
import TournamentStatus from "../../../Components/TournamentStatus/TournamentStatus";
export default function DetailedSport()
{
    const { Str } = useParams()
    return(
        <Layout>
            <div className="">
                Este es el deporte {Str}
                <br />
                <br />
                <br />
                Estado:
                <br />
                <TournamentStatus sportId={1}/>
            </div>
        </Layout>
    )
}