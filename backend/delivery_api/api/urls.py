from django.conf.urls import url
from api import views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    url(r'login', obtain_auth_token, name="login"),
    url(r'users', views.users, name="users"),
    url(r'create-user', views.create_user, name="create-user"),
]
