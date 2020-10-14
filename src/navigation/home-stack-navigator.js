import * as React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeScreen from '../screens/home/home';
import RestaurantDetailScreen from '../screens/home/restaurant-detail';

const HomeStack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
      <HomeStack.Screen
        options={{headerShown: false}}
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </HomeStack.Navigator>
  );
}
