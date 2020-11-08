from rest_framework import serializers 
from django.contrib.auth.models import User
from api.models import *


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ('location',)
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'first_name')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            first_name=validated_data['first_name']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Categories
        fields = ('name',)

class RestaurantSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(read_only=True, many=True)
    class Meta:
        model = Restaurant
        fields = ('id','name','image','categories','star','delivery_time','cost','address')


class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ('id', 'name', 'image', 'description', 'star', 'calories', 'cost')
