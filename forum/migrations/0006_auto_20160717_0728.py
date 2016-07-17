# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-17 07:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0005_auto_20160716_2148'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='status',
            field=models.CharField(choices=[('active', 'Active'), ('hidden', 'Hidden')], default='active', max_length=250),
        ),
    ]