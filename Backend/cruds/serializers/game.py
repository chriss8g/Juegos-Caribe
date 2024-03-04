from ..serializers.sport import SportSerializer
from ..models.game import Game
from rest_framework import serializers

class GameSerializer(serializers.ModelSerializer):
    sport = SportSerializer(read_only=True)
    str = serializers.SerializerMethodField()
    def get_str(self, obj):
        return str(obj)
    class Meta:
        model = Game
        fields = '__all__'