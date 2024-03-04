from ..models.news import News
from rest_framework import serializers

class NewsSerializer(serializers.ModelSerializer):
    str = serializers.SerializerMethodField()
    def get_str(self, obj):
        return str(obj)
    class Meta:
        model = News
        fields = '__all__'
