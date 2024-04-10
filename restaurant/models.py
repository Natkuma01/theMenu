from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from api.models import CustomUser


class Restaurant(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=500)
    state = models.CharField(max_length=100, null=True)
    zip_code = models.IntegerField(null=True)

    def __str__(self):
        return f"{self.name}"
    