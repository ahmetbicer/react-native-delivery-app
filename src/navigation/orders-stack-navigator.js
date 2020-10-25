import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OrdersScreen from '../screens/orders/orders';

const OrdersStack = createStackNavigator();

export default function OrdersStackNavigator() {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen
        options={{headerShown: false}}
        name="Orders"
        component={OrdersScreen}
      />
    </OrdersStack.Navigator>
  );
}