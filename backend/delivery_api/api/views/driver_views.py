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
