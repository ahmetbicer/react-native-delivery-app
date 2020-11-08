from django.conf.urls import url
from api import views

urlpatterns = [
    url(r'login', views.login, name="login"),
    url(r'register', views.register, name="register"),
    url(r'users', views.users, name="users"),
    url(r'restaurants', views.restaurants, name="restaurants"),
    url(r'foods', views.foods, name="foods"),
]
