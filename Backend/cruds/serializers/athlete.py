
from ..models.athlete import Athlete
from rest_framework import serializers

class AthleteSerializer(serializers.ModelSerializer):
    str = serializers.SerializerMethodField()
    def get_str(self, obj):
        return str(obj)
    class Meta:
        model = Athlete
        fields = '__all__'
