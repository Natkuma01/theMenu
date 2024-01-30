from rest_framework import viewsets
from .models import Restaurant
from .serializers import RestaurantSerializer
from rest_framework.authentication import TokenAuthentication


class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    authentication_classes = (TokenAuthentication,)


