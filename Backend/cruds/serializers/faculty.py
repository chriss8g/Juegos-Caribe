from ..models.faculty import Faculty
from rest_framework import serializers

class FacultySerializer(serializers.ModelSerializer):
    str = serializers.SerializerMethodField()
    def get_str(self, obj):
        return str(obj)
    class Meta:
        model = Faculty
        fields = '__all__'