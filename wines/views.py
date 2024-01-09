from rest_framework import viewsets
from .models import Wine
from .serializers import WineSerializer

# Create your views here.
class WineViewSet(viewsets.ModelViewSet):
    queryset = Wine.objects.all()
    serializer_class = WineSerializer