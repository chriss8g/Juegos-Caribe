import { Season } from "./Season";

export interface FacultyOnSeason
{
    id: number,
    str: string,
    points: number,
    season: Season,
    faculty: Faculty
}

export interface PostFacultyOnSeason
{
    points: number,
    season: Season,
    faculty: Faculty
}