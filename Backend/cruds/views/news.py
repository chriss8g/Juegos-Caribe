from ..serializers.news import NewsSerializer
from ..models.news import News
from rest_framework import generics
from ..permissions import ReadOnly
from rest_framework.permissions import IsAdminUser

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