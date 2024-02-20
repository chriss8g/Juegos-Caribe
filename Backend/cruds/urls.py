from django.urls import path
from .views import ListComisioner, DetailComisioner
from .views import ListSeason, DetailSeason

urlpatterns = [
    path('season/<int:pk>/', DetailSeason.as_view()),
    path('season/', ListSeason.as_view()),
    path('comisioner/<int:pk>/', DetailComisioner.as_view()),
    path('comisioner/', ListComisioner.as_view()),
]