import { Athlete } from "./Athlete"
import { Medal } from "./Enums"
import { Sport } from "./Sport"

export interface Team
{
    id: number,
    str: string,
    medal: Medal,
    sex: "Masculino" | "Femenino" | "Mixto",
    sport: Sport,
    faculty: Faculty,
    athletes: Athlete[]
}

export interface PostTeam
{
    medal: Medal,
    sex: "Masculino" | "Femenino" | "Mixto",
    sport: Sport,
    faculty: Faculty,
    athletes: Athlete[]
}