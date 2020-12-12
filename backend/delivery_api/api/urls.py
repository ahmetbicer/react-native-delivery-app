from django.urls import path
from api import views
from api.views import authentication_views, food_views, restaurant_views, user_views

urlpatterns = [
    path('login', authentication_views.login , name="login"),
    path('register', authentication_views.register, name="register"),
    path('restaurants', restaurant_views.restaurants, name="restaurants"),
    path('restaurants/<str:pk>', restaurant_views.get_restaurant, name="get-restaurant"),
    path('restaurants/<str:pk>/foods', restaurant_views.get_restaurant_foods, name="get-restaurant-foods"),
    path('restaurants/search/<str:name>', restaurant_views.search_restaurants, name="search-restaurants"),
    path('foods', food_views.foods, name="foods"),
    path('foods/<str:pk>', food_views.get_food, name="get-food"),
    path('foods/search/<str:name>', food_views.search_foods, name="search-foods"),
]
