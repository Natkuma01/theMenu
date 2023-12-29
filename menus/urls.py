from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import MenuViewSet

menu_router = DefaultRouter()
menu_router.register(r'menus', MenuViewSet)

