# Generated by Django 3.2.7 on 2021-10-07 14:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0002_lead_ower'),
    ]

    operations = [
        migrations.RenameField(
            model_name='lead',
            old_name='ower',
            new_name='owner',
        ),
    ]
