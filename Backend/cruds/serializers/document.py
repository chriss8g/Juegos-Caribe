from ..models.document import Document
from rest_framework import serializers

class DocumentSerializer(serializers.ModelSerializer):
    str = serializers.SerializerMethodField()
    def get_str(self, obj):
        return str(obj)
    class Meta:
        model = Document
        fields = '__all__'