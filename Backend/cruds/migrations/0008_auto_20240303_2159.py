# Generated by Django 2.2.6 on 2024-03-03 21:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cruds', '0007_auto_20240303_2140'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='season',
            name='comisioners',
        ),
        migrations.AddField(
            model_name='season',
            name='comisioners',
            field=models.ManyToManyField(to='cruds.Comisioner'),
        ),
    ]
