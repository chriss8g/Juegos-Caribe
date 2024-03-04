from django.db import models

from .faculty import Faculty
from .season import Season
from .tournament import Tournament


class TournamentOnSeason(models.Model):
    season = models.ForeignKey(Season, on_delete=models.CASCADE)
    tournament = models.ForeignKey(Tournament, on_delete=models.CASCADE)
    faculties = models.ManyToManyField(Faculty, through='FacultyOnTournamentOnSeason')


    def __str__(self):
        return f"{self.tournament} - {self.season} - Points: {self.points}"
