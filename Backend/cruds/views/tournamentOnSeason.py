from ..serializers.tournamentOnSeason import TournamentOnSeasonSerializer
from rest_framework import generics
from ..models.tournamentOnSeason import TournamentOnSeason


class TournamentOnSeasonList(generics.ListCreateAPIView):
    queryset = TournamentOnSeason.objects.all()
    serializer_class = TournamentOnSeasonSerializer


class TournamentOnSeasonDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TournamentOnSeason.objects.all()
    serializer_class = TournamentOnSeasonSerializer
