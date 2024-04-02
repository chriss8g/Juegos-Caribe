from django.db import models

class Faculty(models.Model):
    name = models.CharField(max_length=200)
    logo = models.FileField()

    def __str__(self):
        return self.name