from ..serializers.athlete import AthleteSerializer
from ..models.athlete import Athlete
from rest_framework import generics

from django.http import JsonResponse


class AthleteList(generics.ListCreateAPIView):
    queryset = Athlete.objects.all()
    serializer_class = AthleteSerializer

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