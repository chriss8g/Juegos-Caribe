from django.db import models

from .faculty import Faculty
from .tournamentOnSeason import TournamentOnSeason

class FacultyOnTournamentOnSeason(models.Model):
    tournamentOnSeason = models.ForeignKey(TournamentOnSeason, on_delete=models.CASCADE)
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE)
    points = models.IntegerField() 

    def __str__(self):
        return f"{self.faculty} - {self.tournamentOnSeason}"
