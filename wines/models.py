from django.db import models
from restaurant.models import Restaurant


class Wine(models.Model):
    bin = models.IntegerField()
    type = models.CharField(max_length=10, null=True)
    name = models.CharField(max_length=100)
    grape = models.CharField(max_length=100)
    region = models.CharField(max_length=30)
    year = models.CharField(max_length=20)
    restaurant = models.ForeignKey(
        Restaurant,
        related_name="restaurant_name",
        on_delete=models.CASCADE,
        null=True
    )

    def __str__(self):
        return f"{self.name}"
    

class Description(models.Model):
    name = models.ForeignKey(
        Wine,
        related_name = "description",
        on_delete = models.CASCADE,
    )
    
    notes = models.TextField(max_length=1000)

    def __str__(self):
        return f"{self.name.name}"
