from ..models.tournament import Tournament
from rest_framework import serializers

class TournamentSerializer(serializers.ModelSerializer):
    str = serializers.SerializerMethodField()
    def get_str(self, obj):
        return str(obj)
    
    class Meta:
        model = Tournament
        fields = '__all__'