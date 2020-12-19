from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from api.models import *
from api.serializers import *

@api_view(["GET"])
@permission_classes([])
def restaurants(request):
    try:
        restaurants = Restaurant.objects.all()
    except Restaurant.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = RestaurantSerializer(restaurants, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([])
def get_restaurant(request, pk):
    try:
        restaurant = Restaurant.objects.get(id=pk)
    except Restaurant.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = RestaurantSerializer(restaurant)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([])
def get_restaurant_foods(request, pk):
    try:
        restaurant = Restaurant.objects.get(id=pk)
        foods = Food.objects.filter(restaurant=restaurant)

    except Food.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = FoodSerializer(foods, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([])
def search_restaurants(request, name):
    try:
        restaurants = Restaurant.objects.filter(name__icontains=name)[:5]
    except Restaurant.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = RestaurantSerializer(restaurants, many=True)
    return Response(serializer.data)
