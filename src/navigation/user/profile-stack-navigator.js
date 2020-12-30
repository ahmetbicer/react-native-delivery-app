import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrdersScreen from '../../screens/user/profile/orders';
import OrdersDetailsScreen from '../../screens/user/profile/order-details';
import DeliveryScreen from '../../screens/user/profile/delivery';
import ProfileScreen from '../../screens/user/profile/profile';
import PaymentScreen from '../../screens/user/profile/payment';
import AddressScreen from '../../screens/user/profile/address';
import GetAddressScreen from '../../screens/user/profile/get-address';

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
        name="Orders"
        component={OrdersScreen}
      />
      <ProfileStack.Screen
        options={{ headerShown: false }}
        name="OrderDetails"
        component={OrdersDetailsScreen}
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
