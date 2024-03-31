from django.db import models


class Session(models.Model):

    info = models.CharField(max_length=200)

    def __str__(self):
        return self.info
