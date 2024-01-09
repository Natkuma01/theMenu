from rest_framework import serializers
from .models import Wine, Description

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
            'year'
            )

class DescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Description
        fields = (
            'id',
            'name',
            'notes'
        )