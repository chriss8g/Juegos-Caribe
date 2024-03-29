from django.db import models
from django.contrib.auth import get_user_model

class News (models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    date = models.DateField(auto_now_add=True)
    picture = models.ImageField(upload_to='')
    user = models.ForeignKey(get_user_model(), on_delete=models.PROTECT )

    def __str__(self):
        return self.title