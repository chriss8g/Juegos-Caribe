from ..serializers.faculty import FacultySerializer
from rest_framework import generics
from django.http import JsonResponse

from ..models.faculty import Faculty
from ..models.athlete import Athlete

class FacultyList(generics.ListCreateAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer

class FacultyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer

def Athletes_per_faculty(request, id_faculty):
    athlete = Athlete.objects.filter(faculty = id_faculty)
    athlete_data = list(athlete.values())
    return JsonResponse(athlete_data, safe=False)