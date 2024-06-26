from django.db import models

from .tournamentOnSeason import TournamentOnSeason

from .team import Team
from .sport import Sport
from .sex import Sex
from .session import Session
from .place import Place

class Game(models.Model):

    phase = models.CharField(max_length=200)
    sex = models.ForeignKey(
        Sex, on_delete=models.CASCADE, related_name='sexGame')
    place = models.ForeignKey(Place, on_delete=models.CASCADE, related_name='gamesPlace')
    detailResult = models.TextField(blank=True)
    sport = models.ForeignKey(Sport, on_delete=models.CASCADE, related_name='gamesSport')
    teams = models.ManyToManyField(Team, through='TeamOnGame')
    tournamentOnSeason = models.ForeignKey(TournamentOnSeason, on_delete=models.CASCADE, related_name='tournamentOnSeason')
    date = models.DateField()
    session = models.ForeignKey(
        Session, on_delete=models.CASCADE, related_name='sessionGame')

    def __str__(self):
        return f'{self.sport} - {self.phase} - {self.sex}'