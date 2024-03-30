from ..serializers.facultyOnSeason import FacultyOnSeasonSerializer
from rest_framework import generics
from ..models.facultyOnSeason import FacultyOnSeason

class FacultyOnSeasonList(generics.ListCreateAPIView):
    queryset = FacultyOnSeason.objects.all().order_by('-points')
    serializer_class = FacultyOnSeasonSerializer

class FacultyOnSeasonDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = FacultyOnSeason.objects.all()
    serializer_class = FacultyOnSeasonSerializer