from ..serializers.team import TeamSerializer
from rest_framework import generics
from ..models.team import Team
from ..permissions import ReadOnly
from rest_framework.permissions import IsAdminUser
class TeamList(generics.ListCreateAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class TeamDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Team.objects.all()
    serializer_class = TeamSerializer