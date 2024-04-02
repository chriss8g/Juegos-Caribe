import { Game } from "./Game";
import { Team } from "./Team";

export interface TeamOnGame
{
    id: number,
    str: string,
    result: number,
    team: Team,
    game: Game,
}

export interface PostTeamOnGame
{
    result: number,
    team: Team,
    game: Game,
}