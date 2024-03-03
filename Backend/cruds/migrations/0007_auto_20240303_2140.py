# Generated by Django 2.2.6 on 2024-03-03 21:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cruds', '0006_auto_20240303_2109'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='season',
            name='comisioners',
        ),
        migrations.AddField(
            model_name='season',
            name='comisioners',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, to='cruds.Comisioner'),
            preserve_default=False,
        ),
    ]
