# Generated by Django 2.2.6 on 2024-02-27 15:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cruds', '0004_season_comisioners'),
    ]

    operations = [
        migrations.CreateModel(
            name='Documents',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('head', models.CharField(max_length=100)),
                ('body', models.TextField()),
                ('file', models.FileField(upload_to='')),
            ],
        ),
    ]
