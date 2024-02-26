from django.db import models
from .season import Season

class Tournament(models.Model):
    name = models.CharField(max_length=200)
    season = models.ManyToManyField(Season)

    def __str__(self):
        return self.name