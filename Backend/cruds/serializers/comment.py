from ..models.comment import Comment
from rest_framework import serializers

class CommentSerializer(serializers.ModelSerializer):
    str = serializers.SerializerMethodField()
    def get_str(self, obj):
        return str(obj)
    class Meta:
        model = Comment
        fields = '__all__'