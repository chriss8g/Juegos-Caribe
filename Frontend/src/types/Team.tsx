import { Medal } from "./Enums"

export interface Team
{
    id: number,
    str: string,
    medal: Medal,
    sex: "Masculino" | "Femenino" | "Mixto",
    sports: Sport,
    faculty: Faculty,
    athletes: Athlete[]
}

export interface PostTeam
{
    medal: Medal,
    sex: "Masculino" | "Femenino" | "Mixto",
    sports: Sport,
    faculty: Faculty,
    athletes: Athlete[]
}