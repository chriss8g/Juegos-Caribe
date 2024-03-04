from django.db import models
from django.contrib.auth import get_user_model

class News (models.Model):
    title = models.CharField(max_length=200)
    body = models.CharField(max_length=1000)
    date = models.DateTimeField(auto_now_add=True)
    picture = models.ImageField(upload_to='news_pictures/') #esto me lo dijo phind
    user = models.ForeignKey(get_user_model(), on_delete=models.PROTECT ) # Relación uno a muchos con User

    def __str__(self):
        return self.title