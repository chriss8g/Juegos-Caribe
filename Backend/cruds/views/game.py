from ..serializers.game import GameSerializer
from rest_framework import generics
from ..permissions import ReadOnly
from rest_framework.permissions import IsAdminUser
from django.http import JsonResponse

from ..models.game import Game
from ..models.season import Season
from ..models.teamOnGame import TeamOnGame
from ..models.tournamentOnSeason import TournamentOnSeason

class GameList(generics.ListCreateAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Game.objects.all()
    serializer_class = GameSerializer

class GameDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Game.objects.all()
    serializer_class = GameSerializer

def schedule_view(request):
    # Obtener la última temporada
    latest_season = Season.objects.latest('id')

    # Obtener los torneos asociados a la última temporada
    tournaments_on_season = TournamentOnSeason.objects.filter(season=latest_season)

    # Lista para almacenar la información de los juegos
    schedule = []

    # Iterar sobre cada torneo de la última temporada y obtener los juegos asociados
    for tournament_on_season in tournaments_on_season:
        games = Game.objects.filter(tournamentOnSeason=tournament_on_season)

        # Iterar sobre cada juego y obtener la información requerida
        for game in games:
            game_info = {
                'session': game.session.info,
                'sex': game.sex.data,
                'place': game.place.name,
                'sport': game.sport.name,
                'phase': game.phase,
                'detailResult': game.detailResult,
                'teams': [],
                'points': [],
                'estado': "Finalizado" if game.detailResult else "No Finalizado"
            }

            # Obtener los equipos y los puntos para este juego
            teams_on_game = TeamOnGame.objects.filter(game=game)

            if(len(teams_on_game) == 0):
                continue

            for team_on_game in teams_on_game:
                game_info['teams'].append(team_on_game.team.faculty.name)
                game_info['points'].append(team_on_game.result)

            schedule.append(game_info)

    return JsonResponse(list(schedule), safe=False)