from rest_framework import viewsets
from django.http import HttpResponse
from .serializer import *
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User

# Create your views here.
class CardViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer