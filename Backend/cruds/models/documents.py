from django.db import models

class Documents(models.Model):
    head = models.CharField(max_length=100)
    body = models.TextField()
    file = models.FileField()

    def __str__(self):
        return self.head
    