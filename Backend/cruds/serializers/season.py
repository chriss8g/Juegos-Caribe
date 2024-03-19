from ..models.season import Season
from .commissioner import CommissionerSerializer
from .faculty import FacultySerializer
from .tournament import TournamentSerializer
from rest_framework import serializers


class SeasonSerializer(serializers.ModelSerializer):

    # commissioners = CommissionerSerializer(many=True, read_only=True)
    # tournaments = TournamentSerializer(many=True, read_only=True)
    # faculties = FacultySerializer(many=True, read_only=True)

    str = serializers.SerializerMethodField()

    class Meta:
        model = Season
        fields = '__all__'

    def get_str(self, obj):
        return str(obj)
