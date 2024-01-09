from rest_framework import routers
from wines.urls import wine_router
from django.urls import path, include

router = routers.DefaultRouter()

router.registry.extend(wine_router.registry)


urlpatterns = [
    path('', include(router.urls))
]