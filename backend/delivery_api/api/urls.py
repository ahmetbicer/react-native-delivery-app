from django.urls import path
from api import views
from api.views import authentication_views, food_views, restaurant_views, user_views, driver_views

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
    path('cards', user_views.cards, name="cards"),
    path('cards/<str:pk>', user_views.delete_card, name="delete-card"),
    path('address', user_views.address, name="address"),
    path('address/get/<str:pk>', user_views.get_address, name="get-address"),
    path('address/<str:pk>', user_views.delete_address, name="delete-address"),
    path('orders', user_views.orders, name="orders"),
    path('order-details/<str:pk>', user_views.get_order_details, name="get-order-details"),
    path('restaurant/foods', restaurant_views.foods, name="restaurant-foods"),
    path('restaurant/orders', restaurant_views.orders, name="restaurant-orders"),
    path('restaurant/change-order-state', restaurant_views.change_order_state, name="change-order-state"),
    path('drivers', driver_views.drivers, name="drivers"),
    path('driver/orders', driver_views.orders, name="driver-orders"),
    path('location', driver_views.gps_location, name="get-gps-location"),
    path('location/<str:pk>', driver_views.gps_location, name="add-gps-location"),
    path('rating', user_views.set_rating, name="set-rating"),
]
