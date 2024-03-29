from ..serializers.faculty import FacultySerializer
from rest_framework import generics
from django.http import JsonResponse

from ..models.faculty import Faculty
from ..models.athlete import Athlete
from ..models.team import Team

class FacultyList(generics.ListCreateAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer

class FacultyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer

def athletesPerFaculty(request, id_faculty):
    athlete = Athlete.objects.filter(faculty = id_faculty)
    athlete_data = list(athlete.values())
    return JsonResponse(athlete_data, safe=False)

def facultiesWithMedals(request):
    faculties = Faculty.objects.all()
    data = []
    
    for faculty in faculties:
        medals_faculty = {}
        medals_faculty['faculty'] = faculty.name
        logo_url = faculty.logo.url if faculty.logo else None
        medals_faculty['logo'] = request.build_absolute_uri(logo_url) if logo_url else None
        medals_faculty['medals'] = {}
        
        total = 0
        
        teams_faculty = Team.objects.filter(faculty=faculty)
        for team in teams_faculty:
            medal_type = team.medal.data

            if(medal_type):
                total = total + 1
                if medal_type in medals_faculty['medals']:
                    medals_faculty['medals'][medal_type] += 1
                else:
                    medals_faculty['medals'][medal_type] = 1
        
        medals_faculty['total'] = total
        data.append(medals_faculty)
        
    return JsonResponse(data, safe=False)