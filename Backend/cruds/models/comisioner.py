from django.db import models

class Comisioner(models.Model):
    name = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    biography = models.TextField()
    picture = models.ImageField(upload_to='news_pictures/')

    def __str__(self):
        return self.name
    