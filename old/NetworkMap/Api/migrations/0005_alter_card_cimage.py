# Generated by Django 3.2.4 on 2021-10-03 20:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0004_alter_card_cimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='card',
            name='cImage',
            field=models.ImageField(upload_to='static/img/'),
        ),
    ]