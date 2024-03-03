from django.db import models

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
    
    def __str__(self):
        return self.name