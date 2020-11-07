from rest_framework import serializers 
from django.contrib.auth.models import User
from api.models import Profile


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ('location',)
class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()
    class Meta:
        model = User
        fields = ('username','password','profile')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        user = User(
            username=validated_data['username']
        )
        profile = Profile(user=user, location=profile_data["location"])
        user.set_password(validated_data['password'])
        user.save()
        profile.save()
        return user
