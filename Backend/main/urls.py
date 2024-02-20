from django.urls import path
from .views import DocumentView

#Paths para las views de los modelos de esta app.
urlpatterns = [

path('', DocumentView.as_view(), name='DocumentView.html'),

]