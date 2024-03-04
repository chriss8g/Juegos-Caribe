from django.db import models

from ..models.sport import Sport

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
    sport = models.ForeignKey(Sport, on_delete=models.CASCADE, related_name='games')
    
    def __str__(self):
        return f'{self.sport} {self.phase} {self.sex}'