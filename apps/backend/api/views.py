from django.shortcuts import render

# Create your views here.

from .models import Language, Holero
from .serializers import HoleroSerializer, LanguageSerializer

from django.contrib.auth.models import User
from rest_framework import viewsets

class HoleroViewSet(viewsets.ModelViewSet):
    queryset = Holero.objects.all()
    serializer_class = HoleroSerializer


class LanguageViewSet(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer


