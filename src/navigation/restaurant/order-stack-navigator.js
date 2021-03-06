import * as React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import OrdersScreen from '../../screens/restaurant/orders/orders';
import OrderDetailsScreen from '../../screens/restaurant/orders/order-details';

const HomeStack = createStackNavigator();

export default function OrderStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <HomeStack.Screen
        name="Orders"
        component={OrdersScreen}
      />
      <HomeStack.Screen
        name="OrderDetails"
        component={OrderDetailsScreen}
      />
    </HomeStack.Navigator>
  );
}
