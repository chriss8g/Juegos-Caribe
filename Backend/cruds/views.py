from rest_framework import generics
from .models import Season, Comisioner, Tournament, Faculty, Team, Game, Sport, Athlete
from .serializers import SeasonSerializer, ComisionerSerializer, TournamentSerializer, FacultySerializer, TeamSerializer, GameSerializer, SportSerializer, AthleteSerializer

class SeasonList(generics.ListCreateAPIView):
    queryset = Season.objects.all()
    serializer_class = SeasonSerializer

class SeasonDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Season.objects.all()
    serializer_class = SeasonSerializer

class ComisionerList(generics.ListCreateAPIView):
    queryset = Comisioner.objects.all()
    serializer_class = ComisionerSerializer

class ComisionerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comisioner.objects.all()
    serializer_class = ComisionerSerializer

class TournamentList(generics.ListCreateAPIView):
    queryset = Tournament.objects.all()
    serializer_class = TournamentSerializer

class TournamentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tournament.objects.all()
    serializer_class = TournamentSerializer

class FacultyList(generics.ListCreateAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer

class FacultyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer

class TeamList(generics.ListCreateAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class TeamDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class GameList(generics.ListCreateAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

class GameDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

class SportList(generics.ListCreateAPIView):
    queryset = Sport.objects.all()
    serializer_class = SportSerializer

class SportDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sport.objects.all()
    serializer_class = SportSerializer

class AthleteList(generics.ListCreateAPIView):
    queryset = Athlete.objects.all()
    serializer_class = AthleteSerializer

class AthleteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Athlete.objects.all()
    serializer_class = AthleteSerializer
