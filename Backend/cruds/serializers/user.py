from django.contrib.auth import get_user_model
from rest_framework import serializers

class UserSerializer (serializers.ModelSerializer):
    str = serializers.SerializerMethodField()
        def get_str(self, obj):
            return str(obj)
    class Meta:
        model = get_user_model()
        fields = '__all__'