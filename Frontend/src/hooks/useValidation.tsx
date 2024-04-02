import axios from "axios"
import useAdministration from "./useAdministration"

export default function useValidation()
{
    const API = axios.create({
        baseURL: process.env.API_URL
    })

    async function validateData(data, endpoint)
    {
        if(endpoint == "/teamOnGame")
        {
            return (await checkTeamAndGame(data))
        }
        if(endpoint == "/team")
        {
            return (await checkAthleteAndFaculty(data))
        }
        return true
    }
    async function checkAthleteAndFaculty(data) {
        if(!data["faculty"] || !data["athletes"] || data["athletes"].length == 0) return false
        
        const athletesResponse = await API.get(`${process.env.API_URL}/athlete/`);
        const athletes = athletesResponse.data
        let error = false;
        data["athletes"].map(athl=>
        {
            const reqAthletes = athletes.filter((x)=>x.id == athl)
            reqAthletes.map((athlete)=>{
                if(athlete['faculty'] !== +data["faculty"])
                {
                    error = true
                    return
                }
            })
        })
        return !error
    }

    async function checkTeamAndGame(data) {
        if (!data["team"] || !data["game"]) return false;
        try {
            const teamResponse = await API.get(`${process.env.API_URL}/team/${data['team']}/`);
            let team = teamResponse.data;
    
            const gameResponse = await API.get(`${process.env.API_URL}/game/${data['game']}/`);
            let game = gameResponse.data;
    
            return (game['sport'] === team['sport'] && game['sex'] === team['sex']);
        
        } catch (error) {
            console.error("An error occurred:", error);
            return false; 
        }
    }

    return {validateData}
}