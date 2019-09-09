from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .models import Language, Holero
from .serializers import HoleroSerializer, LanguageSerializer



class HoleroViewSet(viewsets.ModelViewSet):
    queryset = Holero.objects.all()
    serializer_class = HoleroSerializer


class LanguageViewSet(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer


