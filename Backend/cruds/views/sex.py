from ..serializers.sex import SexSerializer
from rest_framework import generics
from ..permissions import ReadOnly
from rest_framework.permissions import IsAdminUser
from ..models.sex import Sex

class SexList(generics.ListCreateAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Sex.objects.all()
    serializer_class = SexSerializer

class SexDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Sex.objects.all()
    serializer_class = SexSerializer
