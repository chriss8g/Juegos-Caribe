from rest_framework import serializers
from .models.comisioner import Comisioner
from .models.season import Season
    
class SeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Season
        fields = ('id', 'title', 'year', 'edition',)
class ComisionerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comisioner
        fields = ('id', 'name', 'position', 'biography', 'picture')