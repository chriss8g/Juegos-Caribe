interface Season{
    id: number,
    str: string
    title: string,
    year: number,
    edition: string,
    comisioners: Comisioner[],
    tournaments: Tournament[],
    faculties: Faculty[]
}