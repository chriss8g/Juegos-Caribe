from django.db import models

from .faculty import Faculty

from .sex import Sex

from .athlete import Athlete

from .sport import Sport

from .medal import Medal


class Team(models.Model):

    medal = models.ForeignKey(
        Medal, on_delete=models.CASCADE, related_name='medal')
    
    sex = models.ForeignKey(
        Sex, on_delete=models.CASCADE, related_name='sex')
    
    sport = models.ForeignKey(
        Sport, on_delete=models.CASCADE, related_name='sport')
    
    athletes = models.ManyToManyField(Athlete)

    faculty = models.ForeignKey(
        Faculty, on_delete=models.CASCADE, related_name='faculty')

    def __str__(self):
        return f'{self.sport} - {self.faculty}'
