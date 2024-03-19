from django.db import models

from .faculty import Faculty
from .tournament import Tournament
from .commissioner import Commissioner


class Season(models.Model):
    title = models.CharField(max_length=200)
    year = models.IntegerField()
    edition = models.CharField(max_length=10)
    commissioners = models.ManyToManyField(Commissioner)
    tournaments = models.ManyToManyField(
        Tournament, through='TournamentOnSeason')
    faculties = models.ManyToManyField(Faculty, through='FacultyOnSeason')

    def __str__(self):
        return self.title
