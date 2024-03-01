from rest_framework import serializers
from .models.comisioner import Comisioner
from .models.faculty import Faculty
from .models.season import Season
from .models.tournament import Tournament
from .models.team import Team
from .models.game import Game
from .models.sport import Sport
from .models.athlete import Athlete

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
        fields = ('id', 'name', 'season')

class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = ('id', 'name', 'dean', 'location')

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('id', 'name', 'faculty', 'sport')

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('id', 'date', 'time', 'team1', 'team2', 'tournament')

class SportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sport
        fields = ('id', 'name', 'description')

class AthleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Athlete
        fields = ('id', 'name', 'age', 'team', 'sport')
