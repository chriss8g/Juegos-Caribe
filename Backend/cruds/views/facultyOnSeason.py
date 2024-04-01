from ..serializers.facultyOnSeason import FacultyOnSeasonSerializer
from rest_framework import generics
from ..models.facultyOnSeason import FacultyOnSeason
from ..permissions import ReadOnly
from rest_framework.permissions import IsAdminUser
class FacultyOnSeasonList(generics.ListCreateAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = FacultyOnSeason.objects.all().order_by('-points')
    serializer_class = FacultyOnSeasonSerializer

class FacultyOnSeasonDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = FacultyOnSeason.objects.all()
    serializer_class = FacultyOnSeasonSerializer