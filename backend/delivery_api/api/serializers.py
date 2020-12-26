from rest_framework import serializers 
from django.contrib.auth.models import User
from api.models import *
from random import randint

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
        fields = ('id', 'name', 'image', 'description', 'star', 'calories', 'cost', 'restaurant')


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ('id', 'number', 'expiry', 'cvv')

    def create(self, validated_data):
        card = Card(
            number=validated_data["number"],
            expiry=validated_data["expiry"],
            cvv=validated_data["cvv"],
            user=validated_data["user"]
        )
        
        card.save()
        return card


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ('id', 'address', 'lat', 'lon', 'address_type')

    def create(self, validated_data):
        address = Address(
            address=validated_data["address"],
            lat=validated_data["lat"],
            lon=validated_data["lon"],
            address_type=validated_data["address_type"],
            user=validated_data["user"]
        )

        address.save()
        return address


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id', 'date', 'order_number', 'status', 'total_cost', 'restaurant', 'payment', 'address')
        extra_kwargs = {"order_number": {"required": False, "allow_null": True},
                        "status": {"required": False, "allow_null": True}, 
                        "orders": {"required": False, "allow_null": True},}

    def create(self, validated_data):
        order = Order(
            address=validated_data["address"],
            restaurant=validated_data["restaurant"],
            order_number=randint(100000, 999999),
            date=validated_data["date"],
            status="WAITING",
            total_cost=validated_data["total_cost"],
            customer=validated_data["customer"],
            payment=validated_data["payment"]
        )

        order.save()
        return order


class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderDetails
        fields = ('id', 'quantity', 'cost', 'order', 'food')

    def create(self, validated_data):
        order_detail = OrderDetails(
            cost=validated_data["cost"],
            quantity=validated_data["quantity"],
            order=validated_data["order"],
            food=validated_data["food"]
        )

        order_detail.save()
        return order_detail
