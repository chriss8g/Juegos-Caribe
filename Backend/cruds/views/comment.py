from ..serializers.comment import CommentSerializer
from ..models.comment import Comment
from rest_framework import generics
from ..permissions import ReadOnly
from rest_framework.permissions import IsAdminUser

from django.contrib.auth import get_user_model
from django.http import JsonResponse

class CommentList(generics.ListCreateAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

def commentPerNews(request, id):
    comments = list(Comment.objects.filter(news=id))
    data = []
    for i in comments:
        t={}
        t["id"] = i.id
        t["date"] = i.date
        t["body"] = i.body
        t["user"] = get_user_model().objects.get(id=i.user.id).username
        data.append(t)
    return JsonResponse(data, safe=False)