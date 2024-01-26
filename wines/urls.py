from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WineViewSet, DescriptionViewSet


router = DefaultRouter()
router.register('wines', WineViewSet, basename='wines')
router.register('description', DescriptionViewSet, basename='description')


urlpatterns = [
    path('', include(router.urls)),
]

