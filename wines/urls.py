from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WineViewSet, DescriptionViewSet, UserViewSet


router = DefaultRouter()
router.register('wines', WineViewSet, basename='wines')
router.register('description', DescriptionViewSet, basename='description')
router.register('users', UserViewSet)


urlpatterns = [
    path('', include(router.urls)),
]

