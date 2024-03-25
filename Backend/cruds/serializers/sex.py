from ..models.sex import Sex
from rest_framework import serializers

class SexSerializer(serializers.ModelSerializer):
    str = serializers.SerializerMethodField()
    def get_str(self, obj):
        return str(obj)
    class Meta:
        model = Sex
        fields = '__all__'