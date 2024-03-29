from django.db import models

from .tournamentOnSeason import TournamentOnSeason

from .team import Team
from .sport import Sport
from .sex import Sex

class Game(models.Model):

    phase = models.CharField(max_length=200)
    sex = models.ForeignKey(
        Sex, on_delete=models.CASCADE, related_name='sexGame')
    place = models.CharField(max_length=200)
    detailResult = models.TextField()
    sport = models.ForeignKey(Sport, on_delete=models.CASCADE, related_name='gamesSport')
    teams = models.ManyToManyField(Team, through='TeamOnGame')
    tournamentOnSeason = models.ForeignKey(TournamentOnSeason, on_delete=models.CASCADE, related_name='tournamentOnSeason')
    date = models.DateField()

    def __str__(self):
        return f'{self.sport} - {self.phase} - {self.sex}'