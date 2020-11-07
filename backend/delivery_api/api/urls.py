from django.conf.urls import url
from api import views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    url(r'login', views.login, name="login"),
    url(r'register', views.register, name="register"),
    url(r'users', views.users, name="users"),
]
