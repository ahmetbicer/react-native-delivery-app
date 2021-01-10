from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from api.models import *
from api.serializers import *

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def drivers(request):
    if(request.method == "GET"):
        try:
            drivers = Driver.objects.all()
        except Driver.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = DriverSerializer(drivers, many=True)
        return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def orders(request):
    if(request.method == "GET"):
        try:
            driver = Driver.objects.get(user=request.user)
            orders = Order.objects.filter(driver=driver).order_by('-id')
        except Order.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)


@api_view(["GET", "POST"])
@permission_classes([IsAuthenticated])
def gps_location(request, pk=1):
    if(request.method == "GET"):
        try:
            if GPSLocation.objects.filter(order=pk).exists():
                location = GPSLocation.objects.filter(order=pk).order_by('-id')[0]  
            else:
                return Response(status=status.HTTP_404_NOT_FOUND)

        except GPSLocation.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = GPSLocationSerializer(location)
        return Response(serializer.data)

    elif(request.method == "POST"):
        serializer = GPSLocationSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
