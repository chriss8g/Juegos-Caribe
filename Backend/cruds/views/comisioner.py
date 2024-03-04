from ..serializers.comisioner import ComisionerSerializer
from rest_framework import generics
from ..models.comisioner import Comisioner


class ComisionerList(generics.ListCreateAPIView):
    queryset = Comisioner.objects.all()
    serializer_class = ComisionerSerializer

class ComisionerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comisioner.objects.all()
    serializer_class = ComisionerSerializer