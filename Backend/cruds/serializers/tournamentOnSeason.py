from .faculty import FacultySerializer
from ..models.tournamentOnSeason import TournamentOnSeason
from rest_framework import serializers


class TournamentOnSeasonSerializer(serializers.ModelSerializer):
    
    # faculties = FacultySerializer(many=True, read_only=True)


    str = serializers.SerializerMethodField()

    def get_str(self, obj):
        return str(obj)

    class Meta:
        model = TournamentOnSeason
        fields = '__all__'
