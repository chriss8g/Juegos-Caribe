from ..models.sport import Sport
from rest_framework import serializers


class SportSerializer(serializers.ModelSerializer):
    str = serializers.SerializerMethodField()
    def get_str(self, obj):
        return str(obj)
    class Meta:
        model = Sport
        fields = '__all__'