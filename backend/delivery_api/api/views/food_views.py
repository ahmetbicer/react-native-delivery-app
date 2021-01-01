from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from api.models import *
from api.serializers import *

@api_view(["GET", "POST"])
@permission_classes([IsAuthenticated])
def foods(request):
    if(request.method == "GET"):
        try:
            foods = Food.objects.all()
        except Food.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = FoodSerializer(foods, many=True)
        return Response(serializer.data)

    elif(request.method == "POST"):
        serializer = FoodSerializer(data=request.data)

        if serializer.is_valid():
            restaurant = Restaurant.objects.get(user=request.user)
            serializer.save(restaurant=restaurant)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_food(request, pk):
    try:
        food = Food.objects.get(id=pk)
    except Food.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = FoodSerializer(food)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def search_foods(request, name):
    try:
        foods = Food.objects.filter(name__icontains=name)[:5]
    except Food.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = FoodSerializer(foods, many=True)
    return Response(serializer.data)
