
from .faculty import FacultySerializer
from ..models.athlete import Athlete
from rest_framework import serializers

class AthleteSerializer(serializers.ModelSerializer):

    # faculty = FacultySerializer(read_only=True)
    
    str = serializers.SerializerMethodField()
    def get_str(self, obj):
        return str(obj)
    class Meta:
        model = Athlete
        fields = '__all__'
