from rest_framework import serializers
from .models import Wine, Description
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token

class WineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wine
        fields = (
            'id', 
            'bin',
            'type', 
            'name',
            'grape',
            'region',
            'year',
            'restaurant'
            )

class DescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Description
        fields = (
            'id',
            'name',
            'notes'
        )


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')

        extra_kwargs = {'password':{
            'write_only': True,
            'required': True
        }}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user