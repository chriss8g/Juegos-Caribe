from ..models.comments import Comments
from rest_framework import serializers

class CommentsSerializer(serializers.ModelSerializer):
    str = serializers.SerializerMethodField()
    def get_str(self, obj):
        return str(obj)
    class Meta:
        model = Comments
        fields = '__all__'