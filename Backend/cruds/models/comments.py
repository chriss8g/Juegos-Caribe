from django.db import models
from .news import News # Asegúrate de que la ruta de importación sea correcta

class Comments (models.Model):
    body = models.CharField(max_length=1000)
    date = models.DateTimeField(auto_now_add=True)
    news = models.ForeignKey(News, on_delete=models.PROTECT)
    #user = models.ForeignKey(User, on_delete=models.PROTECT)

    def str (self):
        return self.body