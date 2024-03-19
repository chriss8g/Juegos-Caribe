from ..models.commissioner import Commissioner
from rest_framework import serializers


class CommissionerSerializer(serializers.ModelSerializer):
    str = serializers.SerializerMethodField()

    def get_str(self, obj):
        return str(obj)

    class Meta:
        model = Commissioner
        fields = '__all__'
