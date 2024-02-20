from rest_framework import generics
from .models import Season
from .serializers import SeasonSerializer

class ListSeason(generics.ListCreateAPIView):
    queryset = Season.objects.all()
    serializer_class = SeasonSerializer

class DetailSeason(generics.RetrieveUpdateDestroyAPIView):
    queryset = Season.objects.all()
    serializer_class = SeasonSerializer