# Generated by Django 3.1.2 on 2020-11-08 12:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_profile'),
    ]

    operations = [
        migrations.CreateModel(
            name='Categories',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
                ('image', models.CharField(max_length=300)),
                ('star', models.FloatField()),
                ('delivery_time', models.IntegerField()),
                ('cost', models.CharField(choices=[('$', 'CHEAP'), ('$$', 'MEDIUM'), ('$$$', 'EXPENSIVE')], max_length=3)),
                ('address', models.CharField(max_length=150)),
                ('categories', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.categories')),
            ],
        ),
    ]
