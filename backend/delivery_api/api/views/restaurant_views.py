from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from api.models import *
from api.serializers import *

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def restaurants(request):
    try:
        restaurants = Restaurant.objects.all()
    except Restaurant.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = RestaurantSerializer(restaurants, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_restaurant(request, pk):
    try:
        restaurant = Restaurant.objects.get(id=pk)
    except Restaurant.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = RestaurantSerializer(restaurant)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_restaurant_foods(request, pk):
    try:
        restaurant = Restaurant.objects.get(id=pk)
        foods = Food.objects.filter(restaurant=restaurant)

    except Food.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = FoodSerializer(foods, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def search_restaurants(request, name):
    try:
        restaurants = Restaurant.objects.filter(name__icontains=name)[:5]
    except Restaurant.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = RestaurantSerializer(restaurants, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def orders(request):
    if(request.method == "GET"):
        try:
            restaurant = Restaurant.objects.get(user=request.user)
            orders = Order.objects.filter(restaurant=restaurant).order_by('-id')
        except Order.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)


@api_view(["PUT"])
@permission_classes(([IsAuthenticated]))
def change_order_state(request):
        order_ = Order.objects.get(id=request.data["id"])
        serializer = OrderSerializer(order_, data=request.data, partial=True)

        if serializer.is_valid():
            order_ = serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def foods(request):
    try:
        restaurant = Restaurant.objects.get(user=request.user)
        foods = Food.objects.filter(restaurant=restaurant).order_by('-id')
    except Food.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = FoodSerializer(foods, many=True)
    return Response(serializer.data)
