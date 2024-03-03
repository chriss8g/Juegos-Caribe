from rest_framework import generics
from ..models.comisioner import Comisioner

from ..serializers import ComisionerSerializer

class ComisionerList(generics.ListCreateAPIView):
    queryset = Comisioner.objects.all()
    serializer_class = ComisionerSerializer

class ComisionerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comisioner.objects.all()
    serializer_class = ComisionerSerializer