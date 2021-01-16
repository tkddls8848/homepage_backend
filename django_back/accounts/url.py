from django.urls import path, include
from .api import RegisterAPI
from knox import views as knox_views

urlpatturns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
]
