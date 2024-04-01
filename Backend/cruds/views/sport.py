from ..serializers.sport import SportSerializer
from rest_framework import generics
from ..models.sport import Sport
from ..models.game import Game
from datetime import date
from django.core import serializers
from ..permissions import ReadOnly
from rest_framework.permissions import IsAdminUser
from django.http import JsonResponse

class SportList(generics.ListCreateAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Sport.objects.all()
    serializer_class = SportSerializer

class SportDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Sport.objects.all()
    serializer_class = SportSerializer

def dailySport(request):
    today = date.today()
    games_today = Game.objects.filter(date=today)

    sports_today = set(game.sport for game in games_today)
    sport_objects = Sport.objects.filter(id__in=[sport.id for sport in sports_today])
    sports = list(sport_objects.values())
    key = 0
    for i in sport_objects:
        sports[key]["logo"] = request.build_absolute_uri(i.logo.url)
        key = key +1

    return JsonResponse(sports, safe=False)