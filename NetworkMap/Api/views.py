from rest_framework import viewsets
from .serializer import *
from .models import *

# Create your views here.
class CardViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer