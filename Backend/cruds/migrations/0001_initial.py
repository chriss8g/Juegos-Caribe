# Generated by Django 2.2.6 on 2024-03-17 02:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Athlete',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('ocupation', models.CharField(max_length=200)),
                ('biography', models.TextField()),
                ('picture', models.ImageField(upload_to='news_pictures/')),
            ],
        ),
        migrations.CreateModel(
            name='Comisioner',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('position', models.CharField(max_length=200)),
                ('biography', models.TextField()),
                ('picture', models.ImageField(upload_to='news_pictures/')),
            ],
        ),
        migrations.CreateModel(
            name='Document',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('head', models.CharField(max_length=100)),
                ('body', models.TextField()),
                ('file', models.FileField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Faculty',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('logo', models.ImageField(upload_to='news_pictures/')),
            ],
        ),
        migrations.CreateModel(
            name='FacultyOnSeason',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('points', models.IntegerField()),
                ('faculty', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cruds.Faculty')),
            ],
        ),
        migrations.CreateModel(
            name='FacultyOnTournamentOnSeason',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('points', models.IntegerField()),
                ('faculty', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cruds.Faculty')),
            ],
        ),
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phase', models.CharField(max_length=200)),
                ('sex', models.CharField(choices=[('Masculino', 'Masculino'), ('Femenino', 'Femenino'), ('Mixto', 'Mixto')], max_length=200)),
                ('place', models.CharField(max_length=200)),
                ('detailResult', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Season',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('year', models.IntegerField()),
                ('edition', models.CharField(max_length=10)),
                ('comisioners', models.ManyToManyField(to='cruds.Comisioner')),
                ('faculties', models.ManyToManyField(through='cruds.FacultyOnSeason', to='cruds.Faculty')),
            ],
        ),
        migrations.CreateModel(
            name='Sport',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('medal', models.CharField(choices=[('Oro', 'Oro'), ('Plata', 'Plata'), ('Bronce', 'Bronce')], max_length=200)),
                ('sex', models.CharField(choices=[('Masculino', 'Masculino'), ('Femenino', 'Femenino'), ('Mixto', 'Mixto')], max_length=200)),
                ('athletes', models.ManyToManyField(to='cruds.Athlete')),
                ('faculty', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='games', to='cruds.Faculty')),
                ('sport', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='games', to='cruds.Sport')),
            ],
        ),
        migrations.CreateModel(
            name='Tournament',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='TournamentOnSeason',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('faculties', models.ManyToManyField(through='cruds.FacultyOnTournamentOnSeason', to='cruds.Faculty')),
                ('season', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cruds.Season')),
                ('tournament', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cruds.Tournament')),
            ],
        ),
        migrations.CreateModel(
            name='TeamOnGame',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('result', models.IntegerField()),
                ('game', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cruds.Game')),
                ('team', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cruds.Team')),
            ],
        ),
        migrations.AddField(
            model_name='season',
            name='tournaments',
            field=models.ManyToManyField(through='cruds.TournamentOnSeason', to='cruds.Tournament'),
        ),
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('body', models.CharField(max_length=1000)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('picture', models.ImageField(upload_to='news_pictures/')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='game',
            name='sport',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='gamesSport', to='cruds.Sport'),
        ),
        migrations.AddField(
            model_name='game',
            name='teams',
            field=models.ManyToManyField(through='cruds.TeamOnGame', to='cruds.Team'),
        ),
        migrations.AddField(
            model_name='game',
            name='tournamentOnSeason',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tournamentOnSeason', to='cruds.TournamentOnSeason'),
        ),
        migrations.AddField(
            model_name='facultyontournamentonseason',
            name='tournamentOnSeason',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cruds.TournamentOnSeason'),
        ),
        migrations.AddField(
            model_name='facultyonseason',
            name='season',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cruds.Season'),
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.CharField(max_length=1000)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('news', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='cruds.News')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='athlete',
            name='faculty',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='facultad', to='cruds.Faculty'),
        ),
    ]
