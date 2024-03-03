from django.db import models

class Comisioner(models.Model):
    name = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    biography = models.TextField()
    picture = models.FileField()

    def __str__(self):
        return self.name
    