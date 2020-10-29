import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrdersScreen from '../screens/profile/orders';
import DeliveryScreen from '../screens/profile/delivery';

const ProfileStack = createStackNavigator();

export default function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        options={{ headerShown: false }}
        name="Orders"
        component={OrdersScreen}
      />
      <ProfileStack.Screen
        options={{ headerShown: false }}
        name="Delivery"
        component={DeliveryScreen}
      />
    </ProfileStack.Navigator>
  );
}
