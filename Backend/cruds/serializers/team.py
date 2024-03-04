from ..models.team import Team
from rest_framework import serializers

class TeamSerializer(serializers.ModelSerializer):
    str = serializers.SerializerMethodField()
    def get_str(self, obj):
        return str(obj)
    class Meta:
        model = Team
        fields = '__all__'