from ..models.season import Season
from ..serializers.comisioner import ComisionerSerializer
from ..serializers.faculty import FacultySerializer
from ..serializers.tournament import TournamentSerializer
from rest_framework import serializers


class SeasonSerializer(serializers.ModelSerializer):
    comisioners = ComisionerSerializer(many=True, read_only=True)
    tournaments = TournamentSerializer(many=True, read_only=True)
    faculties = FacultySerializer(many=True, read_only=True)
    str = serializers.SerializerMethodField()

    class Meta:
        model = Season
        fields = '__all__'

    def get_str(self, obj):
        return str(obj)
