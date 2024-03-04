from django.db import models

from .tournamentOnSeason import TournamentOnSeason

from .team import Team
from .sport import Sport

class Game(models.Model):

    CHOICES = [
        ('Masculino', 'Masculino'), 
        ('Femenino', 'Femenino'),
        ('Mixto', 'Mixto')
    ]

    phase = models.CharField(max_length=200)
    sex = models.CharField(max_length=200, choices=CHOICES)
    place = models.CharField(max_length=200)
    detailResult = models.TextField()
    sport = models.ForeignKey(Sport, on_delete=models.CASCADE, related_name='gamesSport')
    teams = models.ManyToManyField(Team, through='TeamOnGame')
    tournamentOnSeason = models.ForeignKey(TournamentOnSeason, on_delete=models.CASCADE, related_name='tournamentOnSeason')
    

    def __str__(self):
        return f'{self.sport} {self.phase} {self.sex}'