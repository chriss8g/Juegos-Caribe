from django.urls import path
from .views import ListComisioner, ComisionerDetail
from .views import ListSeason, SeasonDetail
from .views import ListTournament, TournamentDetail
from .views import ListFaculty, FacultyDetail
from .views import ListTeam, TeamDetail
from .views import ListGame, GameDetail
from .views import ListSport, SportDetail
from .views import ListAthlete, AthleteDetail

urlpatterns = [
    path('comisioner/<int:pk>/', ComisionerDetail.as_view()),
    path('comisioner/', ListComisioner.as_view()),

    path('season/<int:pk>/', SeasonDetail.as_view()),
    path('season/', ListSeason.as_view()),

    path('tournament/<int:pk>/', TournamentDetail.as_view()),
    path('tournament/', ListTournament.as_view()),

    path('faculty/<int:pk>/', FacultyDetail.as_view()),
    path('faculty/', ListFaculty.as_view()),

    path('team/<int:pk>/', TeamDetail.as_view()),
    path('team/', ListTeam.as_view()),
    
    path('game/<int:pk>/', GameDetail.as_view()),
    path('game/', ListGame.as_view()),

    path('sport/<int:pk>/', SportDetail.as_view()),
    path('sport/', ListSport.as_view()),

    path('athlete/<int:pk>/', AthleteDetail.as_view()),
    path('athlete/', ListAthlete.as_view()),
]
