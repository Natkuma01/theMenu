from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RestaurantSerializer

router = DefaultRouter()
router.register('restaurant', RestaurantSerializer, basename='restaurant')


urlpatterns = [
    path('', include(router.urls)),
]