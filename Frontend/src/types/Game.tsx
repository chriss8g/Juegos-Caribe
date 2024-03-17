interface Game
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