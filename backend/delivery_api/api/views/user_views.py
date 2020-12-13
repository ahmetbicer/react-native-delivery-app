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
