from rest_framework import generics
from .models import Comisioner
from .serializers import ComisionerSerializer

class ListComisioner(generics.ListCreateAPIView):
    queryset = Comisioner.objects.all()
    serializer_class = ComisionerSerializer

class DetailComisioner(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comisioner.objects.all()
    serializer_class = ComisionerSerializer