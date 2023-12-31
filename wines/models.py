from django.db import models


class Wine(models.Model):
    bin = models.IntegerField()
    type = models.CharField(max_length=10, null=True)
    name = models.CharField(max_length=30)
    grape = models.CharField(max_length=100)
    region = models.CharField(max_length=30)
    year = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.name}"
    

class Description(models.Model):
    name = models.ForeignKey(
        Wine,
        related_name = "descriptions",
        on_delete = models.CASCADE,
    )
    notes = models.TextField(max_length=600)

    def __str__(self):
        return f"{self.name}"
