from django.contrib import admin
from .models.comisioner import Comisioner
from .models.faculty import Faculty
from .models.season import Season
from .models.tournament import Tournament
from .models.team import Team
from .models.game import Game
from .models.sport import Sport
from .models.athlete import Athlete
from .models.documents import Documents
from .models.news import News
from .models.comments import Comments

admin.site.register(Comisioner)
admin.site.register(Faculty)
admin.site.register(Season)
admin.site.register(Tournament)
admin.site.register(Team)
admin.site.register(Game)
admin.site.register(Sport)
admin.site.register(Athlete)
admin.site.register(Documents)
admin.site.register(News)
admin.site.register(Comments)
