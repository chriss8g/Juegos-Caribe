from django.urls import path
from .views import ComisionerList, ComisionerDetail
from .views import SeasonList, SeasonDetail
from .views import TournamentList, TournamentDetail
from .views import FacultyList, FacultyDetail
from .views import TeamList, TeamDetail
from .views import GameList, GameDetail
from .views import SportList, SportDetail
from .views import AthleteList, AthleteDetail

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
]
