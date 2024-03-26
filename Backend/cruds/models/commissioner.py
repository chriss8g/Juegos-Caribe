from django.db import models
from .commissionerCategory import CommissionerCategory

class Commissioner(models.Model):
    name = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    biography = models.TextField()
    picture = models.ImageField(upload_to='')
    commissionerCategory = models.ForeignKey(
        CommissionerCategory, on_delete=models.CASCADE, related_name='commissionerCategory')

    def __str__(self):
        return self.name
