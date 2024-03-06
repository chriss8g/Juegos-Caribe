interface Team
{
    id: number,
    medal: "Oro"|"Plata"|"Bronce",
    sport: Sport,
    athletes: Athlete[],
    faculty: Faculty
}