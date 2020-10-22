import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from './src/constants/colors';

import HomeStackNavigator from './src/navigation/home-stack-navigator';
import SearchStackNavigator from './src/navigation/search-stack-navigator';
import OrdersStackNavigator from './src/navigation/orders-stack-navigator';
import CheckoutStackNavigator from './src/navigation/checkout-stack-navigator';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
          showLabel: false,
          inactiveTintColor: colors.gray,
          activeTintColor: colors.yellow,
          style: {
            height: 60,
            backgroundColor: colors.black,
            borderTopWidth: 0,
            elevation: 0,
          },
        }}>
        <Tab.Screen
          name="HomeStack"
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="view-dashboard-outline" color={color} size={size} />
            ),
          }}
          component={HomeStackNavigator}
        />
        <Tab.Screen
          name="SearchStack"
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="magnify" color={color} size={size} />
            ),
          }}
          component={SearchStackNavigator}
        />
        <Tab.Screen
          name="OrdersStack"
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="menu" color={color} size={size} />
            ),
          }}
          component={OrdersStackNavigator}
        />
        <Tab.Screen
          name="CheckoutStack"
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="cart-outline" color={color} size={size} />
            ),
          }}
          component={CheckoutStackNavigator}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
