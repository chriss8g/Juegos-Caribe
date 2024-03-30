from ..serializers.faculty import FacultySerializer
from rest_framework import generics
from django.http import JsonResponse

from ..models.faculty import Faculty
from ..models.team import Team
from ..models.facultyOnSeason import FacultyOnSeason

class FacultyList(generics.ListCreateAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer

class FacultyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer


def facultiesWithMedals(request):
    data = []
    
    faculty_on_season_list = list(FacultyOnSeason.objects.all().order_by('-points'))
    
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
    
    faculty_on_season = list(FacultyOnSeason.objects.filter(faculty_id=faculty_id).order_by('-points'))[0]
    
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
        medal_type = team.medal.type

        if(medal_type):
            total = total + 1
            if medal_type in medals_faculty['medals']:
                medals_faculty['medals'][medal_type] += 1
            else:
                medals_faculty['medals'][medal_type] = 1
    
    medals_faculty['total'] = total
        
    return JsonResponse(medals_faculty, safe=False)