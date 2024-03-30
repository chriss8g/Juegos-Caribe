import { Season } from "./Season";
import { Tournament } from "./Tournament";

export interface TournamentOnSeason
{
    id: number,
    str: string,
    season: Season,
    tournament: Tournament,
    faculties: Faculty[]
}

export interface PostTournamentOnSeason
{
    season: Season,
    tournament: Tournament,
    faculties: Faculty[]
}