from ..serializers.teamOnGame import TeamOnGameSerializer
from rest_framework import generics
from ..models.teamOnGame import TeamOnGame
from ..permissions import ReadOnly
from rest_framework.permissions import IsAdminUser

class TeamOnGameList(generics.ListCreateAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = TeamOnGame.objects.all()
    serializer_class = TeamOnGameSerializer

class TeamOnGameDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = TeamOnGame.objects.all()
    serializer_class = TeamOnGameSerializer