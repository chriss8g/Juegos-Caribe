from django.urls import path

from .views.documents import DocumentsDetail, DocumentsList
from .views.comisioner import ComisionerList, ComisionerDetail
from .views.season import SeasonList, SeasonDetail
from .views.tournament import TournamentList, TournamentDetail
from .views.faculty import FacultyList, FacultyDetail
from .views.team import TeamList, TeamDetail
from .views.teamOnGame import TeamOnGameList, TeamOnGameDetail
from .views.game import GameList, GameDetail
from .views.sport import SportList, SportDetail
from .views.athlete import AthleteList, AthleteDetail
from .views.facultyOnSeason import FacultyOnSeasonList, FacultyOnSeasonDetail
from .views.tournamentOnSeason import TournamentOnSeasonList, TournamentOnSeasonDetail
from .views.facultyOnTournamentOnSeason import FacultyOnTournamentOnSeasonList, FacultyOnTournamentOnSeasonDetail


urlpatterns = [
    path('comisioner/<int:pk>/', ComisionerDetail.as_view()),
    path('comisioner/', ComisionerList.as_view()),

    path('season/<int:pk>/', SeasonDetail.as_view()),
    path('season/', SeasonList.as_view()),

    path('tournament/<int:pk>/', TournamentDetail.as_view()),
    path('tournament/', TournamentList.as_view()),

    path('faculty/<int:pk>/', FacultyDetail.as_view()),
    path('faculty/', FacultyList.as_view()),

    path('team/<int:pk>/', TeamDetail.as_view()),
    path('team/', TeamList.as_view()),

    path('teamOnGame/<int:pk>/', TeamOnGameDetail.as_view()),
    path('teamOnGame/', TeamOnGameList.as_view()),

    path('game/<int:pk>/', GameDetail.as_view()),
    path('game/', GameList.as_view()),

    path('sport/<int:pk>/', SportDetail.as_view()),
    path('sport/', SportList.as_view()),

    path('athlete/<int:pk>/', AthleteDetail.as_view()),
    path('athlete/', AthleteList.as_view()),

    path('documents/<int:pk>/', DocumentsDetail.as_view()),
    path('documents/', DocumentsList.as_view()),

    path('tournamentOnSeason/<int:pk>/', TournamentOnSeasonDetail.as_view()),
    path('tournamentOnSeason/', TournamentOnSeasonList.as_view()),

    path('facultyOnSeason/<int:pk>/', FacultyOnSeasonDetail.as_view()),
    path('facultyOnSeason/', FacultyOnSeasonList.as_view()),

    path('facultyOnTournamentOnSeason/<int:pk>/', FacultyOnTournamentOnSeasonDetail.as_view()),
    path('facultyOnTournamentOnSeason/', FacultyOnTournamentOnSeasonList.as_view()),
]
