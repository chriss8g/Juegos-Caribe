import { Sport } from "./Sport";
import { Team } from "./Team";

export interface Game
{
    id: number,
    str: string,
    phase: string,
    sex: "Masculino" | "Fememino" | "Mixto",
    place: string,
    detailResult: string,
    sports: Sport,
    tournamentOnSeason: TournamentOnSeason,
    teams: [Team]
}

export interface PostGame
{
    phase: string,
    sex: "Masculino" | "Fememino" | "Mixto",
    place: string,
    detailResult: string,
    sports: Sport,
    tournamentOnSeason: TournamentOnSeason,
    teams: [Team]
}