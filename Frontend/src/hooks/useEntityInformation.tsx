import entities from "../../Entities.json"

export default function useEntityInformation()
{
    var athlete: Athlete ={
        id: -1,
        str: "string",
        name: "string",
        ocupation: "string",
        biography: "string",
        picture: "string",
        faculties: faculty
    };
    var comisioner: Comisioner = {
        id: -1,
        str: "string",
        name: "string",
        position: "string",
        biography: "string",
        picture: "string"
    };
    var comment: Comment;
    var document: Documents = {
        id: -1,
        str: "string",
        body: "string",
        file: "string"
    };
    var faculty: Faculty = {
        id: -1,
        str: "string",
        name: "string",
        logo: "string"
    };
    var facultyOnSeason: facultyOnSeason = {
        id: -1,
        str: "string",
        points: -1,
        season: season,
        faculties: faculty
    };
    var facultyOnSeasonOnTournament: FacultyOnSeasonOnTournament ={
        id: -1,
        str: "string",
        points: null,
        tournamentOnSeason: tournamentOnSeason,
        faculties: faculty
    }
    var game: Game = {
        id: -1,
        str: "string",
        phase: "string",
        sex: "Mixto",
        place: "string",
        detailResult: "string",
        sports: sport,
        tournamentOnSeason: tournamentOnSeason,
        teams: [team]
    };
    var New: New = {
        id: -1,
        str: "string",
        title: "string",
        body: "string",
        date: "string",
        picture: "string",
        users: user
    };
    var sport: Sport = {
        id: -1,
        str:"string",
        name: "string"
    };
    var team: Team = {
        id: -1,
        str: "string",
        medal: "Oro",
        sex: "Mixto",
        sports: sport,
        faculties: faculty,
        athletes: [athlete]
    };
    var teamOnGame: TeamOnGame = {
        id: -1,
        str: "string",
        result: -1,
        teams: team,
        games: game,
    };
    var tournament: Tournament = {
        id: -1, 
        str: "string",
        name: "string"
    };
    var tournamentOnSeason: TournamentOnSeason = {
        id: -1,
        str: "string",
        season: season,
        tournaments: tournament,
        faculties: [faculty]
    };
    var user: User = {
        id: -1,
        str: "string",
        password: "string",
        last_login: "string", 
        is_superuser: false,
        username: "string",
        first_name: "string",
        last_name: "string",
        email: "string",
        is_staff: false,
        is_active: false,
        date_joined: "string",
        groups: "string",
        user_permissions: "string"
    };
    var season: Season = {
        id: -1,
        str: "",
        title: "",
        year: 0,
        edition: "",
        comisioners: [],
        tournaments: [],
        faculties: []
    };

    const nonShowProp = ["Str", "Contraseña"]
    const ShowProp = (prop)=>{
        for(const index in nonShowProp)
        {
            if(prop == nonShowProp[index]){
                return false
            }
        }
        return true
    }

    function getPropertyEndpoint(entity: any, propertyIndex: number): string
    {   
        var i = 0;
        for(const prop in entity)
        {
            if(!ShowProp(prop)) i--;
            
            if(i == propertyIndex)
            {
                try
                {
                    return getEndpoint(prop)
                }
                catch{}
            }
            i++;
        }
    }

    function getEndpoint(entityInstanceType: string): string
    {
        for(const i in entities){
            const ent = entities[i]
            if(ent.name === entityInstanceType)
            {
                return ent.endpoint
            }
        }
    }

    
    function getEntityIdOnList(entityName: any):number
    {
        for (let i = 0; i < entities.length; i++)
            if(entities[i].name === entityName)
                return i;

        throw new Error("Entity not found")
    }

    function getEntityType(id:number)
    {
        switch (id) {
            case 0:
                return season;
            case 1:
                return comisioner;
            case 2:
                return tournament;
            case 3:
                return athlete;
            case 4: 
                return comment;
            case 5:
                return document;
            case 6:
                return faculty;
            case 7:
                return facultyOnSeason;
            case 8:
                return facultyOnSeasonOnTournament;
            case 9:
                return game;
            case 10:
                return New;
            case 11:
                return sport;
            case 12:
                return team;
            case 13:
                return teamOnGame;
            case 14:
                return tournamentOnSeason;
            case 15:
                return user;
        }
    }
    return {
        getEntityType,
        getEndpoint,
        getPropertyEndpoint,
        ShowProp,
        getEntityIdOnList
    }
} 