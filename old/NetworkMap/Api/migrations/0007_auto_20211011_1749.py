# Generated by Django 3.2.8 on 2021-10-11 21:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0006_user'),
    ]

    operations = [
        migrations.DeleteModel(
            name='User',
        ),
        migrations.AlterField(
            model_name='card',
            name='cImage',
            field=models.ImageField(upload_to='img/'),
        ),
    ]
