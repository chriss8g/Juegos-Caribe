from rest_framework import serializers
from .models.comisioner import Comisioner
from .models.season import Season
from .models.documents import Documents
    
class SeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Season
        fields = ('id', 'title', 'year', 'edition',)
class ComisionerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comisioner
        fields = ('id', 'name', 'position', 'biography', 'picture')

class DocumentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Documents
        fields = ('id', 'head', 'body', 'file')
    