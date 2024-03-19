from ..serializers.commissioner import CommissionerSerializer
from rest_framework import generics
from ..models.commissioner import Commissioner


class CommissionerList(generics.ListCreateAPIView):
    queryset = Commissioner.objects.all()
    serializer_class = CommissionerSerializer


class CommissionerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Commissioner.objects.all()
    serializer_class = CommissionerSerializer
