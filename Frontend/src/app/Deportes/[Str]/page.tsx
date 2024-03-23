'use client'
import Layout from "../../../Components/Layout/Layout";
import { useParams } from "next/navigation";

export default function DetailedSport()
{
    const { Str } = useParams()
    
    return(
        <div className="">
            <Layout>
                <div className="">
                    Deporte especifico: {Str}
                </div>
            </Layout>
        </div>
    )
}