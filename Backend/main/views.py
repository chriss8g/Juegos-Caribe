from django.shortcuts import render

from django.views.generic import ListView
from .models import Document

#Cada clase setea la vista de los modelos
class DocumentView(ListView):
    model = Document
    template_name = 'Document.html' #Reemplazar por nombre del html del equipo de Frontend
