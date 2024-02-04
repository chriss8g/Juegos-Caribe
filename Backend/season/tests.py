from django.test import TestCase
from .models import Season

class SeasonModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        Season.objects.create(title='first Season', year='2023', edition='LV')

    def test_title_content(self):
        season = Season.objects.get(id=1)
        expected_object_name = f'{season.title}'
        self.assertEquals(expected_object_name, 'first Season')

    def test_year_content(self):
        season = Season.objects.get(id=1)
        expected_object_name = f'{season.year}'
        self.assertEquals(expected_object_name, '2023')

    def test_edition_content(self):
        season = Season.objects.get(id=1)
        expected_object_name = f'{season.edition}'
        self.assertEquals(expected_object_name, 'LV')