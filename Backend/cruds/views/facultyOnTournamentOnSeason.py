from ..serializers.FacultyOnTournamentOnSeason import FacultyOnTournamentOnSeasonSerializer
from rest_framework import generics
from ..models.facultyOnTournamentOnSeason import FacultyOnTournamentOnSeason
from ..permissions import ReadOnly
from rest_framework.permissions import IsAdminUser

class FacultyOnTournamentOnSeasonList(generics.ListCreateAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = FacultyOnTournamentOnSeason.objects.all()
    serializer_class = FacultyOnTournamentOnSeasonSerializer


class FacultyOnTournamentOnSeasonDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = FacultyOnTournamentOnSeason.objects.all()
    serializer_class = FacultyOnTournamentOnSeasonSerializer
