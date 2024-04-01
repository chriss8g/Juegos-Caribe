from ..serializers.news import NewsSerializer
from ..models.news import News
from rest_framework import generics
from ..permissions import ReadOnly
from rest_framework.permissions import IsAdminUser
from django.contrib.auth import get_user_model
from django.http import JsonResponse

class NewsList(generics.ListCreateAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class NewsDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class RecentNewsList(generics.ListCreateAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = News.objects.all().order_by('-id')[:4]
    serializer_class = NewsSerializer

def newsArg(request):
    newss = list(News.objects.all())
    data = []
    for i in newss:
        t={}
        t["id"] = i.id
        t["date"] = i.date
        t["title"] = i.title
        t["picture"] = request.build_absolute_uri(i.picture.url)
        t["body"] = i.body
        t["user"] = get_user_model().objects.get(id=i.user.id).username
        data.append(t)
    return JsonResponse(data, safe=False)

def newsArgSingle(request, id):
    i = News.objects.get(id=id)

    t={}
    t["id"] = i.id
    t["date"] = i.date
    t["title"] = i.title
    t["picture"] = request.build_absolute_uri(i.picture.url)
    t["body"] = i.body
    t["user"] = get_user_model().objects.get(id=i.user.id).username

    return JsonResponse(t, safe=False)