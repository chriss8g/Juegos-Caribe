from django.db import models

from .faculty import Faculty

class Athlete(models.Model):
    name = models.CharField(max_length=200)
    ocupation = models.CharField(max_length=200)
    biography = models.TextField()
    picture = models.ImageField(upload_to='')
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE, related_name='facultad')


    def __str__(self):
        return self.name