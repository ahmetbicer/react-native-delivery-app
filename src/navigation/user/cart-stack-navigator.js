import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../../screens/user/cart/cart';
import CheckoutScreen from '../../screens/user/cart/checkout';

const CartStack = createStackNavigator();

export default function CartStackNavigator() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        options={{ headerShown: false }}
        name="Cart"
        component={CartScreen}
      />
      <CartStack.Screen
        options={{ headerShown: false }}
        name="Checkout"
        component={CheckoutScreen}
      />
    </CartStack.Navigator>
  );
}
