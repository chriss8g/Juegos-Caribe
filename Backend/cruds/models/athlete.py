from django.db import models

class Athlete(models.Model):
    name = models.CharField(max_length=200)
    ocupation = models.CharField(max_length=200)
    biography = models.TextField()
    picture = models.FileField()


    def __str__(self):
        return self.name