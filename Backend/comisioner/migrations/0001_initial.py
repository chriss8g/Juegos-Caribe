# Generated by Django 2.2.6 on 2024-02-02 17:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comisioner',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('position', models.CharField(max_length=200)),
                ('biography', models.CharField(max_length=2000)),
                ( 'picture', models.FileField()),
            ]
        ),
    ]