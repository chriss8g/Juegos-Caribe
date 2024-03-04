from ..models.comisioner import Comisioner
from rest_framework import serializers

class ComisionerSerializer(serializers.ModelSerializer):
    str = serializers.SerializerMethodField()
    def get_str(self, obj):
        return str(obj)
    class Meta:
        model = Comisioner
        fields = '__all__'