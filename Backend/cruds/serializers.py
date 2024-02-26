from rest_framework import serializers
from .models.comisioner import Comisioner
from .models.season import Season
from .models.tournament import Tournament
    
class SeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Season
        fields = ('id', 'title', 'year', 'edition', 'comisioners')
class ComisionerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comisioner
        fields = ('id', 'name', 'position', 'biography', 'picture')
class TournamentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tournament
        fields = ('name', 'season')