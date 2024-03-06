from django.contrib import admin

from .models.teamOnGame import TeamOnGame
from .models.comisioner import Comisioner
from .models.faculty import Faculty
from .models.season import Season
from .models.tournament import Tournament
from .models.team import Team
from .models.game import Game
from .models.sport import Sport
from .models.athlete import Athlete
from .models.document import Document
from .models.facultyOnSeason import FacultyOnSeason
from .models.tournamentOnSeason import TournamentOnSeason
from .models.facultyOnTournamentOnSeason import FacultyOnTournamentOnSeason
from .models.news import News
from .models.comment import Comment

admin.site.register(Comisioner)
admin.site.register(Faculty)
admin.site.register(Season)
admin.site.register(Tournament)
admin.site.register(Team)
admin.site.register(Game)
admin.site.register(Sport)
admin.site.register(Athlete)
admin.site.register(Document)
admin.site.register(TeamOnGame)
admin.site.register(TournamentOnSeason)
admin.site.register(FacultyOnSeason)
admin.site.register(FacultyOnTournamentOnSeason)
admin.site.register(News)
admin.site.register(Comment)
