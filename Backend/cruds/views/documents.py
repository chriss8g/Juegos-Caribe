from ..serializers.documents import DocumentsSerializer
from ..models.documents import Documents
from rest_framework import generics


class DocumentsList(generics.ListCreateAPIView):
    queryset = Documents.objects.all()
    serializer_class = DocumentsSerializer

class DocumentsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Documents.objects.all()
    serializer_class = DocumentsSerializer