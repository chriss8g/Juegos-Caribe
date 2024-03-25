from ..serializers.commissionerCategory import CommissionerCategorySerializer
from rest_framework import generics

from ..models.commissionerCategory import CommissionerCategory

class CommissionerCategoryList(generics.ListCreateAPIView):
    queryset = CommissionerCategory.objects.all()
    serializer_class = CommissionerCategorySerializer

class CommissionerCategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CommissionerCategory.objects.all()
    serializer_class = CommissionerCategorySerializer
