from django.db import models

# Los campos y sus características los cambiamos luego según los requerimientos de la app

class Document(models.Model):
    file = models.TextField()
    type = models.CharField(max_length=30)


