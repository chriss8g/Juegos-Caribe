from django.db import models

from .faculty import Faculty

from .athlete import Athlete

from .sport import Sport


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

    medal = models.CharField(
        max_length=200, choices=MEDAIL_CHOICES, null=True, blank=True)
    sex = models.CharField(max_length=200, choices=SEX_CHOICES)
    sport = models.ForeignKey(
        Sport, on_delete=models.CASCADE, related_name='games')
    athletes = models.ManyToManyField(Athlete)
    faculty = models.ForeignKey(
        Faculty, on_delete=models.CASCADE, related_name='games')

    def __str__(self):
        return f'{self.sport} - {self.faculty}'
