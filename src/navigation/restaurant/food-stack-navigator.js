import * as React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import FoodDetailScreen from '../../screens/restaurant/foods/food-detail';
import FoodScreen from '../../screens/restaurant/foods/food-screen';

const HomeStack = createStackNavigator();

export default function FoodStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <HomeStack.Screen
        name="Home"
        component={FoodScreen}
      />
      <HomeStack.Screen
        name="FoodDetail"
        component={FoodDetailScreen}
      />
    </HomeStack.Navigator>
  );
}
