from ..serializers.comments import CommentsSerializer
from ..models.comments import Comments
from rest_framework import generics


class CommentsList(generics.ListCreateAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer

class CommentsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer