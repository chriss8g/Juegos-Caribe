from .tournamentOnSeason import TournamentOnSeasonSerializer
from .team import TeamSerializer
from .sport import SportSerializer
from ..models.game import Game
from rest_framework import serializers

class GameSerializer(serializers.ModelSerializer):

    # teams = TeamSerializer(many=True, read_only=True)
    # sport = SportSerializer(read_only=True)
    # tournamentOnSeason = TournamentOnSeasonSerializer(read_only=True)
    

    str = serializers.SerializerMethodField()
    def get_str(self, obj):
        return str(obj)
    class Meta:
        model = Game
        fields = '__all__'