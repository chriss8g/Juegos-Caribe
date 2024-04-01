from ..serializers.athlete import AthleteSerializer
from ..models.athlete import Athlete
from ..models.faculty import Faculty
from rest_framework import generics

from django.http import JsonResponse


class AthleteList(generics.ListCreateAPIView):
    queryset = Athlete.objects.all()
    serializer_class = AthleteSerializer

def athleteArg(request, athlete_id):
    athlete = Athlete.objects.get(id=athlete_id)

    t={}
    t["name"] = athlete.name
    t["picture"] = request.build_absolute_uri(athlete.picture.url)
    t["ocupation"] = athlete.ocupation
    t["faculty"] = Faculty.objects.get(id=athlete.faculty.id).name

    return JsonResponse(t, safe=False)

class AthleteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Athlete.objects.all()
    serializer_class = AthleteSerializer

def athletesPerFaculty(request, id_faculty):
    athlete_data = Athlete.objects.filter(faculty = id_faculty)
    athlete = list(athlete_data.values())
    key = 0
    for i in athlete_data:
        athlete[key]["picture"] = request.build_absolute_uri(i.picture.url)
        key = key +1
    return JsonResponse(athlete, safe=False)

def athlete_sports(request, athlete_id):
    athlete = Athlete.objects.get(id=athlete_id)
    sports = athlete.team_set.values_list('sport__name', flat=True).distinct()
    return JsonResponse(list(sports), safe=False)