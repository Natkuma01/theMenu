from django.urls import path
from rest_framework import routers
from .views import WineViewSet

wine_router = routers.DefaultRouter()
wine_router.register(r'wines', WineViewSet)
