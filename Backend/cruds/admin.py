from django.contrib import admin
from .models.comisioner import Comisioner
from .models.season import Season
from .models.tournament import Tournament

admin.site.register(Comisioner)
admin.site.register(Season)
admin.site.register(Tournament)