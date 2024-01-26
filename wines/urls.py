from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WineViewSet


router = DefaultRouter()
router.register('wines', WineViewSet, basename='wines')


urlpatterns = [
    path('', include(router.urls)),
]

