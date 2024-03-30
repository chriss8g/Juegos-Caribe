from django.test import TestCase
from .models.season import Season
from.models.faculty import Faculty
from .models.athlete import Athlete
from .models.document import Document
from .models.medal import Medal
from .models.comment import Comment
from .models.news import News
from django.contrib.auth import get_user_model
#date field
#user
#authentication
#ManytoMany
class SeasonModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        Season.objects.create(title='first Season', year='2023', edition='LV')
        
        Faculty.objects.create(name='Matcom')
        
        Athlete.objects.create(name= 'Estudiante Genérica', biography="Fuí monitora en la primaria" ,faculty=Faculty.objects.get(id=1))
        
        #News.objects.create(tittle="No me gustó el arbitraje", body="Candela")
    
    def test_Season_content(self):
        season = Season.objects.get(id=1)
        title = f'{season.title}'
        self.assertEquals(title, 'first Season')
        year = f'{season.year}'
        self.assertEquals(year, '2023')
        edition = f'{season.edition}'
        self.assertEquals(edition, 'LV')

    def test_Faculty_content(self):
        athlete= Athlete.objects.get(id=1)
        faculty = athlete.faculty
        facName = faculty.name
        biography = athlete.biography
        
        self.assertEqual(facName, 'Matcom')
        self.assertEqual(biography, 'Fuí monitora en la primaria')