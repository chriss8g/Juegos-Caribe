from django.db import models

from .tournament import Tournament
from .comisioner import Comisioner

class Season(models.Model):
    title = models.CharField(max_length=200)
    year = models.IntegerField()
    edition = models.CharField(max_length=10)
    comisioners = models.ManyToManyField(Comisioner)
    tournaments = models.ManyToManyField(Tournament)

    def __str__(self):
        return self.title