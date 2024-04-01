from django.test import TestCase, RequestFactory
from .models.season import Season
from.models.faculty import Faculty
from .models.athlete import Athlete
from .models.comment import Comment
from .models.news import News
from .models.commissionerCategory import CommissionerCategory
from .models.commissioner import Commissioner
from .models.medal import Medal
from django.contrib.auth import get_user_model
from django.urls import resolve, reverse
import requests

#Is setted to localhost to debug
ENDPOINT = "http://127.0.0.1:8000"
Users = get_user_model()

class SeasonModelTest(TestCase):
    #setUpTestData se llama una vez al comienzo de la ejecución de la prueba
    @classmethod
    def setUpTestData(cls):
        #Users model class, funciona similar al resto de clases de modelos
        
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
        Users
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
    
    #Opcionalmente se puede definir el metodo setUp() que se ejecuta al inicio de cada test
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
        
    #Las clases de prueba también tienen un metodo tearDown() que no hemos utilizado. Este método no es particularmente útil para las pruebas de bases de datos, ya que TestCase la clase base se encarga del desmontaje de la base de datos por usted.
    #Como la clase de prueba hereda de TestCase no es necesario pues esta clase por defecto crea una base de datos para el test y luego la destruye
    
    def test_on_going(self):
        response = requests.get(ENDPOINT + "/api/user")
        self.assertEqual( response.status_code , 200)
        
    def test_create_document(self):
        url = reverse(('cruds:d'))
    def test_loging(self):
        login = self.client.login(
            username='carlosbreso', 
            password='12345'
        )
        self.assertFalse(login)
        
        login = self.client.login(
            username='Pepe',
            password='password1'
        )
        self.assertTrue(login)
    #make runserver first
    def test_signin(self):
        pass
        
        
    def test_create_medal(self):
        """ medal = {
            'type' :  'Gold',
        }
        response = requests.put(ENDPOINT + "/api/medal/add/", json=medal)
        print(response.status_code) """
        pass
        
    def test_login(self):
        pass