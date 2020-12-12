from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from api.models import *
from api.serializers import *

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def foods(request):
    try:
        foods = Food.objects.all()
    except Food.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = FoodSerializer(foods, many=True)
    return Response(serializer.data)


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
