from rest_framework import serializers
from .models import Comisioner
    
class ComisionerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comisioner
        fields = ('id', 'name', 'position', 'biography', 'picture')