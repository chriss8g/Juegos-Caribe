from ..serializers.medal import MedalSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly , IsAdminUser, DjangoModelPermissionsOrAnonReadOnly
from ..permissions import ReadOnly
from ..models.medal import Medal

class MedalList(generics.ListCreateAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Medal.objects.all()
    serializer_class = MedalSerializer

class MedalDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Medal.objects.all()
    serializer_class = MedalSerializer
