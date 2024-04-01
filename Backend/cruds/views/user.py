from ..serializers.user import UserSerializer
from django.contrib.auth import get_user_model
from rest_framework import generics
from ..permissions import ReadOnly
from rest_framework.permissions import IsAdminUser


class UserList(generics.ListCreateAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer