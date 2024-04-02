from ..serializers.faculty import FacultySerializer
from rest_framework import generics
from django.http import JsonResponse

from ..models.faculty import Faculty
from ..models.team import Team
from ..models.teamOnGame import TeamOnGame
from ..models.season import Season
from ..models.facultyOnSeason import FacultyOnSeason
from ..permissions import ReadOnly
from rest_framework.permissions import IsAdminUser
class FacultyList(generics.ListCreateAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer

class FacultyDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer

def last(request):
    last_season = Season.objects.latest('id')

    facultySeason = FacultyOnSeason.objects.filter(season = last_season)
    
    faculties = list(set([i.faculty for i in facultySeason]))

    data = []
    for i in list(faculties):
        faculty = {}
        faculty['name'] = i.name
        faculty['image'] = request.build_absolute_uri(i.logo.url)
        data.append(faculty)
    
    return data

def lastFacultyList(request):
    return JsonResponse(last(request), safe=False)
    

def facultiesWithMedals(request):

    last_season = Season.objects.latest('id')

    data = []
    
    faculty_on_season_list = list(FacultyOnSeason.objects.filter(season = last_season).order_by('-points'))
    
    for faculty_on_season in faculty_on_season_list:
        faculty = faculty_on_season.faculty

        medals_faculty = {}
        medals_faculty['points'] = faculty_on_season.points
        medals_faculty['faculty'] = faculty.name
        logo_url = faculty.logo.url if faculty.logo else None
        medals_faculty['logo'] = request.build_absolute_uri(logo_url) if logo_url else None
        medals_faculty['medals'] = {}
        
        total = 0
        
        teams_faculty = Team.objects.filter(faculty=faculty)
        for team in teams_faculty:

            if(not team.medal):
                continue

            medal_type = team.medal.type

            if(medal_type):
                total = total + 1
                if medal_type in medals_faculty['medals']:
                    medals_faculty['medals'][medal_type] += 1
                else:
                    medals_faculty['medals'][medal_type] = 1
        
        medals_faculty['total'] = total
        data.append(medals_faculty)
        
    return JsonResponse(data, safe=False)

def detailFacultyWithMedals(request, faculty_id):

    last_season = Season.objects.latest('id')
    
    faculty_on_season = list(FacultyOnSeason.objects.filter(faculty_id=faculty_id, season = last_season).order_by('-points'))[0]
    
    faculty = faculty_on_season.faculty

    medals_faculty = {}
    medals_faculty['points'] = faculty_on_season.points
    medals_faculty['faculty'] = faculty.name
    logo_url = faculty.logo.url if faculty.logo else None
    medals_faculty['logo'] = request.build_absolute_uri(logo_url) if logo_url else None
    medals_faculty['medals'] = {}
    
    total = 0
    
    teams_faculty = Team.objects.filter(faculty=faculty)
    for team in teams_faculty:

        if(not team.medal):
           continue

        medal_type = team.medal.type

        if(medal_type):
            total = total + 1
            if medal_type in medals_faculty['medals']:
                medals_faculty['medals'][medal_type] += 1
            else:
                medals_faculty['medals'][medal_type] = 1
    
    medals_faculty['total'] = total
        
    return JsonResponse(medals_faculty, safe=False)

def detailSportPerFaculty(request, faculty_id):

    # Obtener la facultad a partir del ID
    faculty = Faculty.objects.get(id=faculty_id)

    # Obtener la última temporada
    last_season = Season.objects.latest('id')

    # Obtener todos los juegos de torneos en la última temporada
    games_in_last_season = TeamOnGame.objects.filter(game__tournamentOnSeason__season=last_season)

    # Obtener todos los equipos de la facultad que participaron en los juegos de la última temporada
    teams_participated = set([team_on_game.team for team_on_game in games_in_last_season if team_on_game.team.faculty == faculty])

    # Obtener los deportes únicos en los que participaron los equipos de la facultad en la última temporada
    sports_participated = set([team.sport for team in teams_participated])

    data = []
    for i in list(sports_participated):
        sport = {}
        sport['name'] = i.name
        sport['image'] = request.build_absolute_uri(i.logo.url)
        data.append(sport)

    return JsonResponse(data, safe=False)
