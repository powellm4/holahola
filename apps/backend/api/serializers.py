from rest_framework import serializers
from .models import Language, Holero
from django.contrib.auth.models import User, Group


class HoleroSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Holero
        fields = '__all__'


class LanguageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']
