from ..serializers.sex import SexSerializer
from rest_framework import generics

from ..models.sex import Sex

class SexList(generics.ListCreateAPIView):
    queryset = Sex.objects.all()
    serializer_class = SexSerializer

class SexDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sex.objects.all()
    serializer_class = SexSerializer
