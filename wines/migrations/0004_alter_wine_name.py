# Generated by Django 5.0.1 on 2024-01-26 04:41

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("wines", "0003_alter_description_notes"),
    ]

    operations = [
        migrations.AlterField(
            model_name="wine",
            name="name",
            field=models.CharField(max_length=100),
        ),
    ]
