from django.db import models
from django.contrib.auth.models import User
from django.conf import settings


class Restaurant(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=500)
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name="restaurant_owner",
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f"{self.name}"
    