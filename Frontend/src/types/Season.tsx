import { Commissioner } from "./Commissioner"
import { Tournament } from "./Tournament"

export interface Season{
    id: number,
    str: string
    title: string,
    year: number,
    edition: string,
    commissioners: Commissioner[],
    tournaments: Tournament[],
    faculties: Faculty[]
}

export interface PostSeason
{
    title: string,
    year: number,
    edition: string,
    commissioners: number[],
}