from django.contrib import admin
from .models import Restaurant

@admin.register(Restaurant)
class Admin(admin.ModelAdmin):
    list_display = ("name", "owner")
    

