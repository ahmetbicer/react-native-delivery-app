from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from api.models import *
from api.serializers import *

@api_view(["GET","POST"])
@permission_classes([IsAuthenticated])
def cards(request):
    if(request.method == "GET"):
        try:
            cards = Card.objects.filter(user=request.user)
        except Card.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = CardSerializer(cards, many=True)
        return Response(serializer.data)

    elif(request.method == "POST"):
        serializer = CardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_card(request, pk):
    try:
        cards = Card.objects.get(id=pk).delete()
    except Card.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    return Response(status=status.HTTP_200_OK)


@api_view(["GET","POST"])
@permission_classes([IsAuthenticated])
def address(request):
    if(request.method == "GET"):
        try:
            addresses = Address.objects.filter(user=request.user)
        except Address.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = AddressSerializer(addresses, many=True)
        return Response(serializer.data)

    elif(request.method == "POST"):
        serializer = AddressSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_address(request, pk):
    try:
        address = Address.objects.get(id=pk).delete()
    except Address.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    return Response(status=status.HTTP_200_OK)


@api_view(["GET", "POST"])
@permission_classes([IsAuthenticated])
def orders(request):
    if(request.method == "GET"):
        try:
            orders = Order.objects.filter(customer=request.user)
        except Order.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)

    elif(request.method == "POST"):
        serializer = OrderSerializer(data=request.data)
        orders = request.data["orders"]
        if serializer.is_valid():
            order_ = serializer.save(customer=request.user)
            
            for order in orders:
                order_detail = {"cost": order["cost"], "quantity": order["count"], "order": order_.id, "food": order["id"]}
                order_detail_serializer = OrderDetailSerializer(data=order_detail)

                if order_detail_serializer.is_valid():
                    order_detail_serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
