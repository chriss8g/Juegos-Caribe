from django.test import TestCase
from .models.season import Season
from.models.faculty import Faculty
from .models.athlete import Athlete
from .models.document import Document
from .models.medal import Medal
from .models.comment import Comment
from .models.news import News
from .models.commissionerCategory import CommissionerCategory
from .models.commissioner import Commissioner
from django.contrib.auth import get_user_model

#date field
#user
#authentication
#ManytoMany

class SeasonModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        #Users model class, funciona similar al resto de clases de modelos
        Users = get_user_model()
        
        CommissionerCategory.objects.create(
            data='consejo'
        )
        CommissionerCategory.objects.create(
            data='arbitraje'
        )
        
        juan = Commissioner.objects.create(
            name='Juan', 
            position='Presidente', 
            biography='Soy Juan', 
            commissionerCategory = CommissionerCategory.objects.get(id=1)
        )
        ester = Commissioner.objects.create(
            name='Ester', 
            position='Miembro', 
            biography='Soy Ester', 
            commissionerCategory = CommissionerCategory.objects.get(id=2)
        )
        
        matcom = Faculty.objects.create(name='Matcom')
        
        flex = Faculty.objects.create(name='FLEX')
      
        
        season1 = Season.objects.create(
            title='first Season',
            year='2023', 
            edition='LV'
        )
        
        season1.commissioners.add(juan, ester)        
        
        Athlete.objects.create(
            name= 'Estudiante Genérica', 
            biography="Fuí monitora en la primaria",
            faculty=Faculty.objects.get(id=1)
            )
        
        
        Users.objects.create_user(
            username='Pepe',
            password='password1',
        )
        user2 = Users.objects.create_user(
            username='Lola',
            password='password2',
        )
        #Para asignar una fecha basta con poner auto_now_add=False en campo DateField del modelo.
        # el formato de fecha es: 'YYYY-MM-DD'
        # si auto_now_add=True se ignora el valor que le pases al campo
        new = News.objects.create(
            title="No me gustó el arbitraje",
            date='2002-11-11', 
            body="El partido de football estaba dudoso",
            user=Users.objects.get(id=1)
        )
    
        Comment.objects.create(
            body="No estoy de acuerdo, el arbitraje fue justo",
            date='2002-11-11',
            news=new,
            user=user2
        )
    
    
    def test_Season_content(self):
        season = Season.objects.get(id=1)
        
        title = f'{season.title}'
        self.assertEquals(title, 'first Season')
        
        year = f'{season.year}'
        self.assertEquals(year, '2023')
        
        edition = f'{season.edition}'
        self.assertEquals(edition, 'LV')

    def test_Athlete_content(self):
        athlete = Athlete.objects.get(id=1)
        
        facName = athlete.faculty.name
        biography = athlete.biography
        
        self.assertEqual(facName, 'Matcom')
        self.assertEqual(biography, 'Fuí monitora en la primaria')
        
    def test_User_content(self):
        Users= get_user_model()
        user = Users.objects.get(id=1)
        
        name= user.get_username()
        #Password is hashed, dont know how to check
        self.assertEqual(name,'Pepe')
        
    def  test_News_Content(self):
        new = News.objects.get(id=1)
        title = new.title
        body = new.body
        userName = new.user.get_username()
        
        self.assertEqual(title,"No me gustó el arbitraje")
        self.assertEqual(body, "El partido de football estaba dudoso")
        self.assertEqual(userName, 'Pepe')
        
    def test_comment_content(self):
        comments = Comment.objects.all()
        print(comments.count())
        
        #comentUserName = comment.user.get_username()
        #newUserName = comment.news.user.get_username()
        #self.assertEqual(comentUserName, 'Lola')
        #self.assertEqual(newUserName,'Pepe')
        #self.assertAlmostEqual(body, 'a')
        
    def test_Comissioner_content(self):
        comissioner = Commissioner.objects.all().first()
        comissionerName = f'{comissioner.name}'
        
        categoryName = comissioner.commissionerCategory.data
        #Note that "season_set" is a new attribute attached to comissioner bc of the ManyToManyField to Comissioner on Season. Agregations like FacultiesOnSeason works differently
        seasonsTitle = comissioner.season_set.first().title
        
        self.assertAlmostEqual(seasonsTitle, 'first Season')
        self.assertEqual(comissionerName, 'Juan')
        self.assertEqual(categoryName, 'consejo')