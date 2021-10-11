from django.urls import path, include
from rest_framework import routers
from . import views
from .views import current_user, UserList

router = routers.DefaultRouter()
router.register(r'Card', views.CardViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('current_user/', current_user)
]