from django.db import models
from django.contrib.auth.models import User
class Categories(models.Model):
    name = models.CharField(max_length=40)

class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    user_type = models.CharField(max_length=12, choices=(('USER','USER'),('RESTAURANT','RESTAURANT'),('DRIVER','DRIVER')))

class Restaurant(models.Model):
    name = models.CharField(max_length=40)
    image = models.CharField(max_length=300)
    categories = models.ManyToManyField(Categories, related_name="categories")
    star = models.FloatField()
    delivery_time = models.IntegerField()
    cost = models.CharField(max_length=3, choices=(('$','CHEAP'),('$$','MEDIUM'),('$$$','EXPENSIVE')))    
    address = models.CharField(max_length=150)
    user = models.ForeignKey(User, blank=True, null=True, on_delete=models.CASCADE)

class Food(models.Model):
    name = models.CharField(max_length=40)
    image = models.CharField(max_length=300)
    description = models.CharField(max_length=300)
    calories = models.IntegerField()
    cost = models.FloatField()    
    restaurant = models.ForeignKey(Restaurant,on_delete=models.CASCADE)

class Card(models.Model):
    number = models.CharField(max_length=16)
    expiry = models.CharField(max_length=5)
    cvv = models.CharField(max_length=3)
    user = models.ForeignKey(User, blank=True, null=True, on_delete=models.DO_NOTHING)

class Address(models.Model):
    address = models.CharField(max_length=100)
    lat = models.FloatField()
    lon = models.FloatField()
    address_type = models.CharField(max_length=10, choices=(('HOME','HOME'),('BUSINESS','BUSINESS'),('OTHER','OTHER')))    
    user = models.ForeignKey(User, blank=True, null=True, on_delete=models.DO_NOTHING)


class Driver(models.Model):
    vehicle_type = models.CharField(max_length=12, choices=(('CAR','CAR'),('MOTORCYCLE','MOTORCYCLE')))        
    user = models.ForeignKey(User, blank=True, null=True, on_delete=models.CASCADE)

class Order(models.Model):
    order_number = models.IntegerField()
    date = models.DateTimeField()
    status = models.CharField(max_length=20, choices=(
        ('WAITING', 'WAITING'), 
        ('CONFIRMED', 'CONFIRMED'), 
        ('IN DELIVERY', 'IN DELIVERY'), 
        ('DELIVERED', 'DELIVERED'),
        ('RATED', 'RATED'))
        )
    total_cost = models.FloatField()
    customer = models.ForeignKey(User, blank=True, null=True, on_delete=models.DO_NOTHING)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.DO_NOTHING)
    payment = models.ForeignKey(Card, null=True, on_delete=models.SET_NULL)
    address = models.ForeignKey(Address, null=True, on_delete=models.SET_NULL)
    driver = models.ForeignKey(Driver, blank=True, null=True, on_delete=models.CASCADE)


class OrderDetails(models.Model):
    quantity = models.IntegerField()

    order = models.ForeignKey(Order, on_delete=models.DO_NOTHING)
    food = models.ForeignKey(Food, on_delete=models.DO_NOTHING)

class GPSLocation(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()
    order = models.ForeignKey(Order, on_delete=models.DO_NOTHING)


class Rating(models.Model):
    restaurant_star = models.FloatField()
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    restaurant = models.ForeignKey(Restaurant, blank=True, null=True, on_delete=models.CASCADE)
    user = models.ForeignKey(User, blank=True, null=True, on_delete=models.CASCADE)

