from ..models.facultyOnTournamentOnSeason import FacultyOnTournamentOnSeason
from rest_framework import serializers


class FacultyOnTournamentOnSeasonSerializer(serializers.ModelSerializer):

    str = serializers.SerializerMethodField()

    def get_str(self, obj):
        return str(obj)

    class Meta:
        model = FacultyOnTournamentOnSeason
        fields = '__all__'
