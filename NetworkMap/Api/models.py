from django.db import models

# Create your models here.
class Card(models.Model):
    card_ID = models.AutoField(db_column='Card_ID', primary_key=True)  # Field name made lowercase.
    cTitle = models.TextField(db_column='cTitle', max_length=14, blank=False, default='')  # Field name made lowercase. This field type is a guess.
    cAddress = models.TextField(db_column='cAddress', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    cDescription = models.TextField(db_column='cDescription', blank=True, null=True)  # Field name made lowercase.
    cImage = models.ImageField(upload_to='static/img/')
        
    def __str__(self):
        return self.cTitle

    class Meta:
        managed = True
        db_table = 'CARD'

class User(models.Model):
    user_ID = models.AutoField(primary_key=True)
    email = models.TextField(max_length=255, blank=False, default='', unique=True)
    password = models.TextField(max_length=255, blank=False, default='')

    def __str__(self):
        return self.email