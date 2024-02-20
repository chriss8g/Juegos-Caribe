from django.db import models

class Season(models.Model):
    title = models.CharField(max_length=200)
    year = models.IntegerField()
    edition = models.CharField(max_length=10)

    def __str__(self):
        return self.title
