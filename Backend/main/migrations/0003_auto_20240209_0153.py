# Generated by Django 2.2.6 on 2024-02-09 01:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_auto_20240209_0130'),
    ]

    operations = [
        migrations.AlterField(
            model_name='document',
            name='file',
            field=models.TextField(),
        ),
    ]
