from ..serializers.medal import MedalSerializer
from rest_framework import generics

from ..models.medal import Medal

class MedalList(generics.ListCreateAPIView):
    queryset = Medal.objects.all()
    serializer_class = MedalSerializer

class MedalDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Medal.objects.all()
    serializer_class = MedalSerializer
