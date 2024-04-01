from ..serializers.tournamentOnSeason import TournamentOnSeasonSerializer
from rest_framework import generics
from ..models.tournamentOnSeason import TournamentOnSeason
from ..permissions import ReadOnly
from rest_framework.permissions import IsAdminUser


class TournamentOnSeasonList(generics.ListCreateAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = TournamentOnSeason.objects.all()
    serializer_class = TournamentOnSeasonSerializer


class TournamentOnSeasonDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = TournamentOnSeason.objects.all()
    serializer_class = TournamentOnSeasonSerializer
