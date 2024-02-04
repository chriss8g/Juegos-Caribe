from rest_framework import generics
from .models import Season
from .serializers import SeasonSerializer

class ListSeason(generics.ListAPIView):
    queryset = Season.objects.all()
    serializer_class = SeasonSerializer

class DetailSeason(generics.RetrieveAPIView):
    queryset = Season.objects.all()
    serializer_class = SeasonSerializer