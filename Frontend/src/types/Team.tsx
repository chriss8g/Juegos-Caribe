interface Team
{
    id: number,
    str: string,
    medal: "Oro"|"Plata"|"Bronce",
    sex: "Masculino" | "Femenino" | "Mixto",
    sports: Sport,
    faculties: Faculty,
    athletes: Athlete[]
}