from django.db import models

class Game(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    game_id = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name
