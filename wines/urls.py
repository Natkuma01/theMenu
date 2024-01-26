from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WineViewSet

# wine_router = routers.DefaultRouter()
# wine_router.register(r'wines', WineViewSet)

# ])



# router = routers.DefaultRouter()
# router.register(r'wines', WineViewSet, basename="wines")

router = DefaultRouter()
router.register('wines', WineViewSet, basename='wines')


urlpatterns = [
    path('', include(router.urls)),
]

