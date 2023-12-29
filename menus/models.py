from django.db import models

class Menu(models.Model):
    bin = models.IntegerField()
    wine_name = models.CharField(max_length=30)
    grape = models.CharField(max_length=100)
    region = models.CharField(max_length=30)
    producer = models.CharField(max_length=30)
    year = models.IntegerField()

class Description(models.Model):
    wine_name = models.CharField(max_length=30)
    notes = models.TextField(max_length=600)

    def __str__(self):
        return f"{self.wine_name}"
