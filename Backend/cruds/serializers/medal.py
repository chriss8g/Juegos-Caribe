from ..models.medal import Medal
from rest_framework import serializers

class MedalSerializer(serializers.ModelSerializer):
    str = serializers.SerializerMethodField()
    def get_str(self, obj):
        return str(obj)
    class Meta:
        model = Medal
        fields = '__all__'