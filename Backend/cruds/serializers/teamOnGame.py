from ..models.teamOnGame import TeamOnGame
from rest_framework import serializers


class TeamOnGameSerializer(serializers.ModelSerializer):
    
    str = serializers.SerializerMethodField()

    def get_str(self, obj):
        return str(obj)
    class Meta:
        model = TeamOnGame
        fields = '__all__'