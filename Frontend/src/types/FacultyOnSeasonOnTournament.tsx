import { TournamentOnSeason } from "./TournamentOnSeason"

export interface FacultyOnSeasonOnTournament
{
    id: number,
    str: string,
    points: number,
    tournamentOnSeason: TournamentOnSeason,
    faculty: Faculty
}

export interface PostFacultyOnSeasonOnTournament
{
    points: number,
    tournamentOnSeason: TournamentOnSeason,
    faculty: Faculty
}