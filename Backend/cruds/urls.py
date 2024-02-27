from django.urls import path
from .views import ListComisioner, DetailComisioner
from .views import ListSeason, DetailSeason, DetailDocuments, ListDocuments

urlpatterns = [
    path('season/<int:pk>/', DetailSeason.as_view()),
    path('season/', ListSeason.as_view()),
    path('comisioner/<int:pk>/', DetailComisioner.as_view()),
    path('comisioner/', ListComisioner.as_view()),
    path('documents/<int:pk>/', DetailDocuments.as_view()),
    path('documents/', ListDocuments.as_view()),

]