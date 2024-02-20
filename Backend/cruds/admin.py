from django.contrib import admin
from .models.comisioner import Comisioner
from .models.season import Season

admin.site.register(Comisioner)
admin.site.register(Season)