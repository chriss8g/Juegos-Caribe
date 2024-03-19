import { Comisioner } from "./Comisioner"
import { Tournament } from "./Tournament"

export interface Season{
    id: number,
    str: string
    title: string,
    year: number,
    edition: string,
    comisioners: Comisioner[],
    tournaments: Tournament[],
    faculties: Faculty[]
}

export interface PostSeason
{
    title: string,
    year: number,
    edition: string,
    comisioners: number[],
}