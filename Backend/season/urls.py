from django.urls import path
from .views import ListSeason, DetailSeason

urlpatterns = [
    path('<int:pk>/', DetailSeason.as_view()),
    path('', ListSeason.as_view()),
]