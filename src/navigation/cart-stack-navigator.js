import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../screens/cart/cart';

const CartStack = createStackNavigator();

export default function CartStackNavigator() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        options={{ headerShown: false }}
        name="Cart"
        component={CartScreen}
      />
    </CartStack.Navigator>
  );
}
