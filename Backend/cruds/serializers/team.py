from .faculty import FacultySerializer
from .athlete import AthleteSerializer
from .sport import SportSerializer
from ..models.team import Team
from rest_framework import serializers

class TeamSerializer(serializers.ModelSerializer):

    # faculty = FacultySerializer(read_only=True)
    # sport = SportSerializer(read_only=True)
    # athletes = AthleteSerializer(many=True, read_only=True)

    str = serializers.SerializerMethodField()
    def get_str(self, obj):
        return str(obj)
    class Meta:
        model = Team
        fields = '__all__'