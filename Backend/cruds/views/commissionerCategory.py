from ..serializers.commissionerCategory import CommissionerCategorySerializer
from rest_framework import generics
from ..permissions import ReadOnly
from rest_framework.permissions import IsAdminUser
from ..models.commissionerCategory import CommissionerCategory

class CommissionerCategoryList(generics.ListCreateAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = CommissionerCategory.objects.all()
    serializer_class = CommissionerCategorySerializer

class CommissionerCategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = CommissionerCategory.objects.all()
    serializer_class = CommissionerCategorySerializer
