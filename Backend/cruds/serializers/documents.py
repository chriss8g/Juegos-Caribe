from ..models.documents import Documents
from rest_framework import serializers

class DocumentsSerializer(serializers.ModelSerializer):
    str = serializers.SerializerMethodField()
    def get_str(self, obj):
        return str(obj)
    class Meta:
        model = Documents
        fields = '__all__'