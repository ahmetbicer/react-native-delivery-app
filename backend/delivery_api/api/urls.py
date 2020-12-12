from django.urls import path
from api import views

urlpatterns = [
    path('login', views.login, name="login"),
    path('register', views.register, name="register"),
    path('restaurants', views.restaurants, name="restaurants"),
    path('restaurants/<str:pk>', views.get_restaurant, name="get-restaurant"),
    path('restaurants/<str:pk>/foods', views.get_restaurant_foods, name="get-restaurant-foods"),
    path('foods', views.foods, name="foods"),
    path('foods/<str:pk>', views.get_food, name="get-food")
]
