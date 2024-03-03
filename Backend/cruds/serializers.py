from rest_framework import serializers
from .models.comisioner import Comisioner
from .models.faculty import Faculty
from .models.season import Season
from .models.tournament import Tournament
from .models.team import Team
from .models.game import Game
from .models.sport import Sport
from .models.athlete import Athlete


class ComisionerSerializer(serializers.ModelSerializer):
    str = serializers.SerializerMethodField()
    def get_str(self, obj):
        return str(obj)
    class Meta:
        model = Comisioner
        fields = '__all__'

class TournamentSerializer(serializers.ModelSerializer):
    str = serializers.SerializerMethodField()
    def get_str(self, obj):
        return str(obj)
    
    class Meta:
        model = Tournament
        fields = '__all__'

class SeasonSerializer(serializers.ModelSerializer):
    comisioners = ComisionerSerializer(many=True, read_only=True)
    tournaments = TournamentSerializer(many=True, read_only=True)
    str = serializers.SerializerMethodField()

    class Meta:
        model = Season
        fields = '__all__'

    def get_str(self, obj):
        return str(obj)

class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = '__all__'

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'

class SportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sport
        fields = '__all__'

class AthleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Athlete
        fields = '__all__'
