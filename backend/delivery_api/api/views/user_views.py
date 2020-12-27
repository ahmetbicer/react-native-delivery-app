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


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_address(request, pk):
    print("heyyyo")
    if(request.method == "GET"):
        try:
            address = Address.objects.get(id=pk)
        except Address.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = AddressSerializer(address)
        
        return Response(serializer.data)

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
            orders = Order.objects.filter(customer=request.user).order_by('-id')
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
                order_detail = {"quantity": order["count"]}
                order_detail_serializer = OrderDetailSerializer(data=order_detail)

                if order_detail_serializer.is_valid():
                    order_detail_serializer.save(order=order_.id, food=order["id"])
                print(serializer.errors)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
@permission_classes([])
def get_order_details(request, pk):
    try:
        order_details = OrderDetails.objects.filter(order=pk)
    except OrderDetails.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = OrderDetailSerializer(order_details, many=True)
    return Response(serializer.data)
