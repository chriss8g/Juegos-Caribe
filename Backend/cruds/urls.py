from django.urls import path

from .views.document import DocumentDetail, DocumentList
from .views.commissioner import CommissionerList, CommissionerDetail
from .views.season import SeasonList, SeasonDetail
from .views.tournament import TournamentList, TournamentDetail
from .views.faculty import FacultyList, FacultyDetail, facultiesWithMedals, detailFacultyWithMedals, detailSportPerFaculty, lastFacultyList
from .views.team import TeamList, TeamDetail
from .views.place import PlaceList, PlaceDetail
from .views.teamOnGame import TeamOnGameList, TeamOnGameDetail
from .views.game import GameList, GameDetail
from .views.sport import SportList, SportDetail, dailySport
from .views.athlete import AthleteList, AthleteDetail, athletesPerFaculty
from .views.facultyOnSeason import FacultyOnSeasonList, FacultyOnSeasonDetail
from .views.tournamentOnSeason import TournamentOnSeasonList, TournamentOnSeasonDetail
from .views.facultyOnTournamentOnSeason import FacultyOnTournamentOnSeasonList, FacultyOnTournamentOnSeasonDetail
from .views.sex import SexDetail, SexList
from .views.medal import MedalDetail, MedalList
from .views.commissionerCategory import CommissionerCategoryDetail, CommissionerCategoryList

from .views.news import NewsList, NewsDetail, RecentNewsList
from .views.comment import CommentList, CommentDetail
from .views.user import UserList, UserDetail

urlpatterns = [
    path('commissioner/<int:pk>/', CommissionerDetail.as_view()),
    path('commissioner/', CommissionerList.as_view()),

    path('season/<int:pk>/', SeasonDetail.as_view()),
    path('season/', SeasonList.as_view()),

    path('tournament/<int:pk>/', TournamentDetail.as_view()),
    path('tournament/', TournamentList.as_view()),

    path('faculty/<int:pk>/', FacultyDetail.as_view()),
    path('faculty/', FacultyList.as_view()),
    path('faculty/lastSeason/', lastFacultyList),
    path('faculty/medals/', facultiesWithMedals),
    path('faculty/medals/<int:faculty_id>/', detailFacultyWithMedals),
    path('faculty/sport/<int:faculty_id>/', detailSportPerFaculty),

    path('team/<int:pk>/', TeamDetail.as_view()),
    path('team/', TeamList.as_view()),

    path('teamOnGame/<int:pk>/', TeamOnGameDetail.as_view()),
    path('teamOnGame/', TeamOnGameList.as_view()),

    path('game/<int:pk>/', GameDetail.as_view()),
    path('game/', GameList.as_view()),

    path('sport/<int:pk>/', SportDetail.as_view()),
    path('sport/', SportList.as_view()),
    path('dailySport/', dailySport),

    path('athlete/<int:pk>/', AthleteDetail.as_view()),
    path('athlete/', AthleteList.as_view()),
    path('faculty/<int:id_faculty>/athletes/', athletesPerFaculty),

    path('document/<int:pk>/', DocumentDetail.as_view()),
    path('document/', DocumentList.as_view()),

    path('tournamentOnSeason/<int:pk>/', TournamentOnSeasonDetail.as_view()),
    path('tournamentOnSeason/', TournamentOnSeasonList.as_view()),

    path('facultyOnSeason/<int:pk>/', FacultyOnSeasonDetail.as_view()),
    path('facultyOnSeason/', FacultyOnSeasonList.as_view()),

    path('facultyOnTournamentOnSeason/<int:pk>/',
         FacultyOnTournamentOnSeasonDetail.as_view()),
    path('facultyOnTournamentOnSeason/',
         FacultyOnTournamentOnSeasonList.as_view()),

    path('news/<int:pk>/', NewsDetail.as_view()),
    path('news/', NewsList.as_view()),
    path('recentNews/', RecentNewsList.as_view()),

    path('comment/<int:pk>/', CommentDetail.as_view()),
    path('comment/', CommentList.as_view()),

    path('user/<int:pk>/', UserDetail.as_view()),
    path('user/', UserList.as_view()),

    path('sex/<int:pk>/', SexDetail.as_view()),
    path('sex/', SexList.as_view()),

    path('medal/<int:pk>/', MedalDetail.as_view()),
    path('medal/', MedalList.as_view()),

    path('place/<int:pk>/', PlaceDetail.as_view()),
    path('place/', PlaceList.as_view()),

    path('commissionerCategory/<int:pk>/', CommissionerCategoryDetail.as_view()),
    path('commissionerCategory/', CommissionerCategoryList.as_view()),
]
