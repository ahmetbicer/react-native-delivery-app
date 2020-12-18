from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    location = models.CharField(max_length=30)

class Categories(models.Model):
    name = models.CharField(max_length=40)

class Restaurant(models.Model):
    name = models.CharField(max_length=40)
    image = models.CharField(max_length=300)
    categories = models.ManyToManyField(Categories, related_name="categories")
    star = models.FloatField()
    delivery_time = models.IntegerField()
    cost = models.CharField(max_length=3, choices=(('$','CHEAP'),('$$','MEDIUM'),('$$$','EXPENSIVE')))    
    address = models.CharField(max_length=150)

class Food(models.Model):
    name = models.CharField(max_length=40)
    image = models.CharField(max_length=300)
    description = models.CharField(max_length=300)
    star = models.FloatField()
    calories = models.IntegerField()
    cost = models.FloatField()    
    restaurant = models.ForeignKey(Restaurant,on_delete=models.CASCADE)

class Card(models.Model):
    number = models.CharField(max_length=16)
    expiry = models.CharField(max_length=5)
    cvv = models.CharField(max_length=3)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)

class Address(models.Model):
    address = models.CharField(max_length=100)
    lat = models.FloatField()
    lon = models.FloatField()
    address_type = models.CharField(max_length=10, choices=(('HOME','HOME'),('BUSINESS','BUSINESS'),('OTHER','OTHER')))    
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
