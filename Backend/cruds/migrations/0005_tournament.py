# Generated by Django 2.2.6 on 2024-02-26 18:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cruds', '0004_season_comisioners'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tournament',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('season', models.ManyToManyField(to='cruds.Season')),
            ],
        ),
    ]
