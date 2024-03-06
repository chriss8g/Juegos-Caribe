from django.db import models
from .news import News # Asegúrate de que la ruta de importación sea correcta
from django.contrib.auth import get_user_model

class Comment (models.Model):
    body = models.CharField(max_length=1000)
    date = models.DateTimeField(auto_now_add=True)
    news = models.ForeignKey(News, on_delete=models.PROTECT)
    user = models.ForeignKey(get_user_model(), on_delete=models.PROTECT)

    def __str__(self):
        return self.body