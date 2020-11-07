from django.conf.urls import url
from api import views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    url(r'login', obtain_auth_token, name="login"),
]
