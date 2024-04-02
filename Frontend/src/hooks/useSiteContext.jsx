import useAdministration from "./useAdministration";
import { useEffect, useState } from "react"

export default function useSiteContext()
{
    const{getData, Data} = useAdministration()
    
    useEffect(()=>{
        getData(`${process.env.API_URL}/faculty`)

        fetch(`${process.env.API_URL}/game/schedule/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(
            (response)=>response.json()
            )
            .then(
            (data)=>{
                setSchedule(data)
            }
        )
    },[])

    const[Faculties, setFaculties] = useState([]);
    const[schedule, setSchedule] = useState([]);

    useEffect(()=>{
        setFaculties(Data);
    },[Data]);

    return({Faculties, schedule})
}