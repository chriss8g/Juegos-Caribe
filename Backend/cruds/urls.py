from django.urls import path
from .views.comisioner import ComisionerList, ComisionerDetail
from .views.season import SeasonList, SeasonDetail
from .views.tournament import TournamentList, TournamentDetail
from .views.faculty import FacultyList, FacultyDetail
from .views.team import TeamList, TeamDetail
from .views.game import GameList, GameDetail
from .views.sport import SportList, SportDetail
from .views.athlete import AthleteList, AthleteDetail

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
    
    path('game/<int:pk>/', GameDetail.as_view()),
    path('game/', GameList.as_view()),

    path('sport/<int:pk>/', SportDetail.as_view()),
    path('sport/', SportList.as_view()),

    path('athlete/<int:pk>/', AthleteDetail.as_view()),
    path('athlete/', AthleteList.as_view()),
    
    path('documents/<int:pk>/', DocumentsDetail.as_view()),
    path('documents/', DocumentsList.as_view()),
]



