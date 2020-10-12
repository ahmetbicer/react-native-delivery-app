import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CheckoutScreen from '../screens/checkout';

const CheckoutStack = createStackNavigator();

export default function CheckoutStackNavigator() {
  return (
    <CheckoutStack.Navigator>
      <CheckoutStack.Screen
        options={{headerShown: false}}
        name="Checkout"
        component={CheckoutScreen}
      />
    </CheckoutStack.Navigator>
  );
}
