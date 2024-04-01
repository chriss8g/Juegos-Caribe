from ..serializers.session import SessionSerializer
from rest_framework import generics
from ..permissions import ReadOnly
from rest_framework.permissions import IsAdminUser
from ..models.session import Session

class SessionList(generics.ListCreateAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Session.objects.all()
    serializer_class = SessionSerializer

class SessionDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Session.objects.all()
    serializer_class = SessionSerializer
