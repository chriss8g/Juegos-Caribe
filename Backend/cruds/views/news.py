from ..serializers.news import NewsSerializer
from ..models.news import News
from rest_framework import generics


class NewsList(generics.ListCreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class NewsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class RecentNewsList(generics.ListCreateAPIView):
    queryset = News.objects.all().order_by('-id')[:4]
    serializer_class = NewsSerializer