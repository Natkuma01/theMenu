# Generated by Django 4.1.2 on 2024-04-10 03:26

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("restaurant", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="restaurant",
            name="state",
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name="restaurant",
            name="zip_code",
            field=models.IntegerField(null=True),
        ),
    ]