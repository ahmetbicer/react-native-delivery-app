import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DeliveryScreen from '../../screens/restaurant/profile/delivery';
import ProfileScreen from '../../screens/restaurant/profile/profile';
import PaymentScreen from '../../screens/restaurant/profile/payment';
import AddressScreen from '../../screens/restaurant/profile/address';
import GetAddressScreen from '../../screens/restaurant/profile/get-address';

const ProfileStack = createStackNavigator();

export default function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={ProfileScreen}
      />
      <ProfileStack.Screen
        options={{ headerShown: false }}
        name="Address"
        component={AddressScreen}
      />
      <ProfileStack.Screen
        options={{ headerShown: false }}
        name="GetAddress"
        component={GetAddressScreen}
      />
      <ProfileStack.Screen
        options={{ headerShown: false }}
        name="Payment"
        component={PaymentScreen}
      />
      <ProfileStack.Screen
        options={{ headerShown: false }}
        name="Delivery"
        component={DeliveryScreen}
      />
    </ProfileStack.Navigator>
  );
}
