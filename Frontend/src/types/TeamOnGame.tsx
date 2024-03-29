import { Team } from "./Team";

export interface TeamOnGame
{
    id: number,
    str: string,
    result: number,
    teams: Team,
    games: Game,
}

export interface PostTeamOnGame
{
    result: number,
    teams: Team,
    games: Game,
}