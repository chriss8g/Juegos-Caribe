from django.db import models

class Faculty(models.Model):
    name = models.CharField(max_length=200)
    logo = models.ImageField(upload_to='')

    def __str__(self):
        return self.name