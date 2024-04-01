from ..serializers.document import DocumentSerializer
from ..models.document import Document
from rest_framework import generics
from ..permissions import ReadOnly
from rest_framework.permissions import IsAdminUser

class DocumentList(generics.ListCreateAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer

class DocumentDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [ReadOnly|IsAdminUser]
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer