from ..models.facultyOnSeason import FacultyOnSeason
from rest_framework import serializers


class FacultyOnSeasonSerializer(serializers.ModelSerializer):
    
    str = serializers.SerializerMethodField()

    def get_str(self, obj):
        return str(obj)
    class Meta:
        model = FacultyOnSeason
        fields = '__all__'