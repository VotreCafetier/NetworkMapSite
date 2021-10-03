from django.db import models

# Create your models here.
class Card(models.Model):
    card_id = models.AutoField(db_column='Card_ID', primary_key=True)  # Field name made lowercase.
    ctitle = models.TextField(db_column='cTitle')  # Field name made lowercase. This field type is a guess.
    caddress = models.TextField(db_column='cAddress', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    cdescription = models.TextField(db_column='cDescription', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'CARD'