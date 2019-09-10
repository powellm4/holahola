from django.shortcuts import render

# Create your views here.

from .models import Language, Holero
from .serializers import HoleroSerializer, LanguageSerializer, UserSerializer, GroupSerializer

from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

class HoleroViewSet(viewsets.ModelViewSet):
    queryset = Holero.objects.all()
    serializer_class = HoleroSerializer


class LanguageViewSet(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer


class UserViewSet(viewsets.ModelViewSet):
  """
  API endpoint that allows users to be viewed or edited.
  """
  queryset = User.objects.all().order_by('-date_joined')
  serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
  """
  API endpoint that allows groups to be viewed or edited.
  """
  queryset = Group.objects.all()
  serializer_class = GroupSerializer

