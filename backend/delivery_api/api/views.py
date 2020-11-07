from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

# from api.models import User
from django.contrib.auth.models import User
from api.serializers import UserSerializer

# authentication
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def users(request):
    try:
        users = User.objects.all()
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(["POST"])
@permission_classes([])
def create_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
