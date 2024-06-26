import { Sport } from "./Sport";
import { Team } from "./Team";
import { TournamentOnSeason } from "./TournamentOnSeason";

export interface Game
{
    id: number,
    str: string,
    phase: string,
    detailResult: string,
    date: Date
    sex: Sex,
    place: string,
    sport: Sport,
    tournamentOnSeason: TournamentOnSeason,
    session: Session,
    teams: [Team]
}

export interface PostGame
{
    phase: string,
    detailResult: string,
    date: Date,
    sex: Sex,
    place: string,
    sport: Sport,
    tournamentOnSeason: TournamentOnSeason,
    session: Session
}