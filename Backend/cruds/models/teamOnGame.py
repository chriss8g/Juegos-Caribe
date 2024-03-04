from django.db import models

from .team import Team
from .game import Game

class TeamOnGame(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    result = models.IntegerField() 

    def __str__(self):
        return f"{self.team} - {self.game} - Resultado: {self.result}"