from ..serializers.comment import CommentSerializer
from ..models.comment import Comment
from rest_framework import generics
from ..permissions import ReadOnly
from rest_framework.permissions import IsAdminUser

class CommentList(generics.ListCreateAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer