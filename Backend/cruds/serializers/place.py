from ..models.place import Place
from rest_framework import serializers

class PlaceSerializer(serializers.ModelSerializer):
    str = serializers.SerializerMethodField()
    def get_str(self, obj):
        return str(obj)
    class Meta:
        model = Place
        fields = '__all__'