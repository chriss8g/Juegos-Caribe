from rest_framework import generics
from .models.comisioner import Comisioner
from .serializers import ComisionerSerializer
from .models.season import Season
from .serializers import SeasonSerializer
from .models.tournament import Tournament
from .serializers import TournamentSerializer

# Season
class ListSeason(generics.ListCreateAPIView):
    queryset = Season.objects.all()
    serializer_class = SeasonSerializer

class DetailSeason(generics.RetrieveUpdateDestroyAPIView):
    queryset = Season.objects.all()
    serializer_class = SeasonSerializer

# Comisioner
class ListComisioner(generics.ListCreateAPIView):
    queryset = Comisioner.objects.all()
    serializer_class = ComisionerSerializer

class DetailComisioner(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comisioner.objects.all()
    serializer_class = ComisionerSerializer

# Tournament
class ListTournament(generics.ListCreateAPIView):
    queryset = Tournament.objects.all()
    serializer_class = TournamentSerializer

class DetailTournament(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tournament.objects.all()
    serializer_class = TournamentSerializer