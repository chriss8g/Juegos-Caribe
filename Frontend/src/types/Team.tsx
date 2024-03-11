interface Team
{
    id: number,
    str: string,
    medal: "Oro"|"Plata"|"Bronce",
    sport: Sport,
    athletes: Athlete[],
    faculty: Faculty
}