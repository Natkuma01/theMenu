from django.contrib import admin
from .models import Wine, Description

# admin.site.register(Wine)

# admin.site.register(Description)

@admin.register(Wine)
class WineModel(admin.ModelAdmin):
    list_display = ("name", "grape", "region")

@admin.register(Description)
class DescriptionModel(admin.ModelAdmin):
    list_display = ("id", "name")