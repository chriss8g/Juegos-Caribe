from django.db import models

from .season import Season
from .faculty import Faculty

class FacultyOnSeason(models.Model):
    season = models.ForeignKey(Season, on_delete=models.CASCADE)
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE)
    points = models.IntegerField() 

    def __str__(self):
        return f"{self.faculty} - {self.season} - Points: {self.points}"