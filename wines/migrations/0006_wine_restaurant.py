# Generated by Django 4.1.2 on 2024-01-30 06:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("restaurant", "0001_initial"),
        ("wines", "0005_alter_description_name"),
    ]

    operations = [
        migrations.AddField(
            model_name="wine",
            name="restaurant",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="restaurant_name",
                to="restaurant.restaurant",
            ),
        ),
    ]
