from django.urls import path
from .views import ListComisioner, DetailComisioner

urlpatterns = [
    path('<int:pk>/', DetailComisioner.as_view()),
    path('', ListComisioner.as_view()),
]