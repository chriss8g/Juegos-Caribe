from ..serializers.commissioner import CommissionerSerializer
from rest_framework import generics
from ..models.commissioner import Commissioner
from ..models.commissionerCategory import CommissionerCategory
from django.http import JsonResponse
from ..permissions import ReadOnly
from rest_framework.permissions import IsAdminUser
class CommissionerList(generics.ListCreateAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Commissioner.objects.all()
    serializer_class = CommissionerSerializer

def commissionerArg(request):
    commissioners = list(Commissioner.objects.all())
    data = []
    for i in commissioners:
        t={}
        t["name"] = i.name
        t["image"] = request.build_absolute_uri(i.picture.url)
        t["position"] = i.position
        t["commissionerCategory"] = CommissionerCategory.objects.filter(id=i.commissionerCategory.id)[0].data
        data.append(t)
    return JsonResponse(data, safe=False)


class CommissionerDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Commissioner.objects.all()
    serializer_class = CommissionerSerializer
