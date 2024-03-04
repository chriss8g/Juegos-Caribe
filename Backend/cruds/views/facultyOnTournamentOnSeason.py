from ..serializers.FacultyOnTournamentOnSeason import FacultyOnTournamentOnSeasonSerializer
from rest_framework import generics
from ..models.facultyOnTournamentOnSeason import FacultyOnTournamentOnSeason


class FacultyOnTournamentOnSeasonList(generics.ListCreateAPIView):
    queryset = FacultyOnTournamentOnSeason.objects.all()
    serializer_class = FacultyOnTournamentOnSeasonSerializer


class FacultyOnTournamentOnSeasonDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = FacultyOnTournamentOnSeason.objects.all()
    serializer_class = FacultyOnTournamentOnSeasonSerializer
