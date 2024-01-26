from rest_framework import viewsets
from .models import Wine, Description
from .serializers import WineSerializer, DescriptionSerializer
from rest_framework.authentication import TokenAuthentication

class WineViewSet(viewsets.ModelViewSet):
    queryset = Wine.objects.all()
    serializer_class = WineSerializer
    authentication_classes = (TokenAuthentication,)

class DescriptionViewSet(viewsets.ModelViewSet):
    queryset = Description.objects.all()
    serializer_class = DescriptionSerializer
    authentication_classes = (TokenAuthentication,)


