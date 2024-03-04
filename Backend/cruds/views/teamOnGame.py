from ..serializers.teamOnGame import TeamOnGameSerializer
from rest_framework import generics
from ..models.teamOnGame import TeamOnGame

class TeamOnGameList(generics.ListCreateAPIView):
    queryset = TeamOnGame.objects.all()
    serializer_class = TeamOnGameSerializer

class TeamOnGameDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TeamOnGame.objects.all()
    serializer_class = TeamOnGameSerializer