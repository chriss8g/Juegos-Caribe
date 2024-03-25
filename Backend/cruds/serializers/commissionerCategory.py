from ..models.commissionerCategory import CommissionerCategory
from rest_framework import serializers

class CommissionerCategorySerializer(serializers.ModelSerializer):
    str = serializers.SerializerMethodField()
    def get_str(self, obj):
        return str(obj)
    class Meta:
        model = CommissionerCategory
        fields = '__all__'