from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from api.models import *
from api.serializers import *

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_cards(request):
    try:
        cards = Card.objects.filter(user=request.user)
    except Card.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = CardSerializer(cards, many=True)
    return Response(serializer.data)
