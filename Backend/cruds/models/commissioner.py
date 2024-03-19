from django.db import models


class Commissioner(models.Model):
    name = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    biography = models.TextField()
    picture = models.ImageField(upload_to='news_pictures/')

    CHOICES = [
        ('disciplinariaP', 'disciplinariaP'),
        ('disciplinariaS', 'disciplinariaS'),
        ('organizativa', 'organizativa')
    ]
    comition = models.CharField(max_length=200, choices=CHOICES)

    def __str__(self):
        return self.name
