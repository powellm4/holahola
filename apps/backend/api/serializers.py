from rest_framework import serializers
from .models import Language, Holero


class HoleroSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Holero
        fields = '__all__'


class LanguageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'
