from django.db import models

class News (models.Model):
    title = models.CharField(max_length=200)
    body = models.CharField(max_length=1000)
    date = models.DateTimeField(auto_now_add=True)
    picture = models.ImageField(upload_to='news_pictures/') #esto me lo dijo phind
    #user = models.ForeignKey(User, on_delete=models.PROTECT ) # Relación uno a muchos con User

    def str (self):
        return self.title