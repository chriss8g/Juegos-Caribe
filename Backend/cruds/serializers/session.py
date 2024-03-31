from ..models.session import Session
from rest_framework import serializers

class SessionSerializer(serializers.ModelSerializer):
    str = serializers.SerializerMethodField()
    def get_str(self, obj):
        return str(obj)
    class Meta:
        model = Session
        fields = '__all__'