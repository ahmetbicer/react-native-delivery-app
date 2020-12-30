from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token

from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from api.models import *
from api.serializers import *

# authentication
@api_view(["POST"])
@permission_classes([])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@permission_classes([])
def login(request):
    context = {}
    email = request.data["username"]
    password = request.data["password"]
    user = authenticate(username=email, password=password)
    if user:
        try: 
            token = Token.objects.get(user=user)
        except Token.DoesNotExist:
            token = Token.objects.create(user=user)
        
        profile = Profile.objects.get(user=user)

        context["email"] = user.get_username()
        context["name"] = user.get_full_name()
        context["token"] = token.key
        context["user_type"] = profile.user_type
        
        return Response(context, status.HTTP_200_OK)
    else:
        context["error"] = "Wrong Credentials"
        return Response(context, status.HTTP_401_UNAUTHORIZED)

