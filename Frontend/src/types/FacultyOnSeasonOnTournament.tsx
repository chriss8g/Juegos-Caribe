interface FacultyOnSeasonOnTournament
{
    id: number,
    str: string,
    points: number,
    tournamentOnSeason: TournamentOnSeason,
    faculty: Faculty
}

interface PostFacultyOnSeasonOnTournament
{
    points: number,
    tournamentOnSeason: TournamentOnSeason,
    faculty: Faculty
}