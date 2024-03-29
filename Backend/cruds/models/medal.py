from django.db import models


class Medal(models.Model):

    type = models.CharField(max_length=200)

    def __str__(self):
        return self.type
