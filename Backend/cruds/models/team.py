from django.db import models

class Team(models.Model):
    MEDAIL_CHOICES = [
        ('Oro', 'Oro'), 
        ('Plata', 'Plata'),
        ('Bronce', 'Bronce')
    ]

    SEX_CHOICES = [
        ('Masculino', 'Masculino'), 
        ('Femenino', 'Femenino'),
        ('Mixto', 'Mixto')
    ]

    medail = models.CharField(max_length=200, choices=MEDAIL_CHOICES)
    sex = models.CharField(max_length=200, choices=SEX_CHOICES)

    def __str__(self):
        return self.name