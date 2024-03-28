import entities from "../../Entities.json"
import { Athlete, PostAthlete } from "../types/Athlete";
import { PostCommissioner, Commissioner } from "../types/Commissioner";
import { Comments, PostComment } from "../types/Comment";
import { PostFacultyOnSeason, FacultyOnSeason } from "../types/FacultyOnSeason";
import { FacultyOnSeasonOnTournament, PostFacultyOnSeasonOnTournament } from "../types/FacultyOnSeasonOnTournament";
import { PostGame, Game } from "../types/Game";
import { PostSeason, Season } from "../types/Season";
import { PostSport, Sport } from "../types/Sport";
import { PostTeam, Team } from "../types/Team";
import { PostTeamOnGame, TeamOnGame } from "../types/TeamOnGame";
import { PostTournament, Tournament } from "../types/Tournament";
import { PostTournamentOnSeason, TournamentOnSeason } from "../types/TournamentOnSeason";

export default function useEntityInformation()
{
    var athlete: Athlete ={
        id: -1,
        str: "",
        name: "",
        ocupation: "",
        biography: "",
        picture: "",
        faculty: faculty
    };
    var postAthlete: PostAthlete = {
        name: "",
        ocupation: "",
        biography: "",
        picture: new File([], ""),
        faculty: faculty
    }
    var commissionerCategory: CommissionerCategory = {
        id: -1,
        str: "",
        data: ""
    }
    var commissioner: Commissioner = {
        id: -1,
        str: "",
        name: "",
        position: "",
        biography: "",
        picture: "",
        commissionerCategory: commissionerCategory
    };
    var PostCommissioner: PostCommissioner = {
        name: "",
        position: "",
        biography: "",
        picture: new File([], "") ,
        commissionerCategory: commissionerCategory
    }
    var comment: Comments = {
        id: -1,
        str: "",
        body: "",
        date: "",
        news: New,
        users: user
    };
    var postComment: PostComment = {
        body: "",
        news: New,
        user: user
    }
    var document: Documents = {
        id: -1,
        str: "",
        head: "",
        body: "",
        file: ""
    };
    var postDocument: PostDocuments = {
        head: "",
        body: "",
        file: new File([], "")
    };
    var faculty: Faculty = {
        id: -1,
        str: "",
        name: "",
        logo: new File([], "")
    };
    var postFaculty: PostFaculty = {
        name: "",
        logo: new File([], "")
    };
    var facultyOnSeason: FacultyOnSeason = {
        id: -1,
        str: "",
        points: -1,
        season: season,
        faculty: faculty
    };
    var PostFacultyOnSeason: PostFacultyOnSeason = {
        points: 0,
        season: season,
        faculty: faculty
    }
    var facultyOnSeasonOnTournament: FacultyOnSeasonOnTournament ={
        id: -1,
        str: "",
        points: 0,
        tournamentOnSeason: tournamentOnSeason,
        faculty: faculty
    }
    var postFacultyOnSeasonOnTournament: PostFacultyOnSeasonOnTournament ={
        points: 0,
        tournamentOnSeason: tournamentOnSeason,
        faculty: faculty
    }
    var game: Game = {
        id: -1,
        str: "",
        phase: "",
        sex: "Mixto",
        place: "",
        detailResult: "",
        sports: sport,
        tournamentOnSeason: tournamentOnSeason,
        teams: [team]
    };
    var postGame: PostGame = {
        phase: "",
        sex: "Mixto",
        place: "",
        detailResult: "",
        sports: sport,
        tournamentOnSeason: tournamentOnSeason,
        teams: [team]
    };
    var New: New = {
        id: -1,
        str: "",
        title: "",
        body: "",
        date: "",
        picture: "",
        user: user
    };
    var postNew: PostNew = {
        title: "",
        body: "",
        picture: new File([], ""),
        user: user
    };
    var sport: Sport = {
        id: -1,
        str:"",
        name: ""
    };
    var postSport: PostSport = {
        name: ""
    }
    var team: Team = {
        id: -1,
        str: "",
        medal: "",
        sex: "Mixto",
        sport: sport,
        faculty: faculty,
        athletes: [athlete]
    };
    
    var PostTeam: PostTeam = {
        medal: "",
        sex: "Mixto",
        sport: sport,
        faculty: faculty,
        athletes: [athlete]
    };

    var teamOnGame: TeamOnGame = {
        id: -1,
        str: "",
        result: -1,
        teams: team,
        games: game,
    };
    var PostTeamOnGame: PostTeamOnGame = {
        result: 0,
        teams: team,
        games: game
    }
    var tournament: Tournament = {
        id: -1, 
        str: "",
        name: ""
    };
    var postTournament: PostTournament = {
        name: ""
    };
    var tournamentOnSeason: TournamentOnSeason = {
        id: -1,
        str: "",
        season: season,
        tournament: tournament,
        faculties: [faculty]
    };
    var postTournamentOnSeason: PostTournamentOnSeason = {
        season: season,
        tournament: tournament,
        faculties: [faculty]
    };
    var user: User = {
        id: -1,
        str: "",
        password: "",
        last_login: "", 
        is_superuser: false,
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        is_staff: false,
        is_active: false,
        date_joined: "",
        groups: "",
        user_permissions: ""
    };
    var postUser: PostUser = {
        password: "",
        last_login: "", 
        is_superuser: false,
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        is_staff: false,
        is_active: false,
        date_joined: "",
        groups: "",
        user_permissions: ""
    };
    var season: Season = {
        id: -1,
        str: "",
        title: "",
        year: 0,
        edition: "",
        commissioners: [],
        tournaments: [],
        faculties: []
    };
    var PostSeason: PostSeason = {
        title: "",
        year: 0,
        edition: "",
        commissioners: []
    }


    const getEntityPostType = (id: number) =>
    {
        switch (id) {
            case 0: 
                return PostSeason;
            case 1:
                return PostCommissioner;
            case 2:
                return postTournament;
            case 3:
                return postAthlete;
            case 4: 
                return postComment;
            case 5:
                return postDocument;
            case 6:
                return postFaculty;
            case 7:
                return PostFacultyOnSeason;
            case 8:
                return postFacultyOnSeasonOnTournament;
            case 9:
                return postGame;
            case 10:
                return postNew;
            case 11:
                return postSport;
            case 12:
                return PostTeam;
            case 13:
                return PostTeamOnGame;
            case 14:
                return postTournamentOnSeason;
            case 15:
                return postUser;
        }
    }

    

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

    function pluralOf(entityName: string)
    {
        switch (entityName) {
            case "season":
                return "seasons";
            case "commissioners": 
                return "commissioners"; 
            case "tournament":
                return "tournaments";
            case "athlete":
                return "athletes";
            case "comment":
                return "comments";
            case "document":
                return "documents";
            case "faculty":
                return "faculties";
            case "game":
                return "games";
            case "sport":
                return "sports";
            case "team":
                return "teams";
            case "user":
                return "users";
        }
    }

    function getEndpoint(entityInstanceType: string): string
    {
        for(const i in entities){
            const ent = entities[i]
            if(ent.name === entityInstanceType || ent.name === pluralOf(entityInstanceType))
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
                return commissioner;
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

    function castTo(entity, object):Object{
        let castedObject = {}
        
        const objectValues = Object.values(object)
        const objectKeys = Object.keys(object)
        const entityKeys = Object.keys(entity)
        const entityValues = Object.values(entity)
        
        castedObject['id'] = objectValues[objectKeys.indexOf('id')]

        for (let i = 0; i < entityKeys.length; i++) {
            if(objectKeys.indexOf(entityKeys[i]) !== -1)
            {
                if(entityValues[i] instanceof File)
                    castedObject[entityKeys[i]] = new File([], "")
                else
                {
                    const index = objectKeys.indexOf(entityKeys[i])
                    castedObject[entityKeys[i]] = objectValues[index]
                }
            }
        }
        return castedObject
    }


    return {
        getEntityType,
        getEndpoint,
        getPropertyEndpoint,
        ShowProp,
        getEntityIdOnList,
        getEntityPostType,
        castTo
    }
} 