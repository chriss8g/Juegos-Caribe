from ..serializers.tournament import TournamentSerializer
from rest_framework import generics
from ..models.tournament import Tournament
from ..permissions import ReadOnly
from rest_framework.permissions import IsAdminUser

class TournamentList(generics.ListCreateAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Tournament.objects.all()
    serializer_class = TournamentSerializer

class TournamentDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Tournament.objects.all()
    serializer_class = TournamentSerializer