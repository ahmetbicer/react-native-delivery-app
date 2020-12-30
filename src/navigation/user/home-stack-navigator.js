import * as React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeScreen from '../../screens/user/home/home';
import RestaurantDetailScreen from '../../screens/user/home/restaurant-detail';
import FoodDetailScreen from '../../screens/user/home/food-detail';

const HomeStack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
      />
      <HomeStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
      <HomeStack.Screen
        name="FoodDetail"
        component={FoodDetailScreen}
      />
    </HomeStack.Navigator>
  );
}
