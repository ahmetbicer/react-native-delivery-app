import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from './src/constants/colors';

import HomeScreen from './src/screens/home';
import SearchScreen from './src/screens/search';
import FavoritesScreen from './src/screens/favorites';
import CheckoutScreen from './src/screens/checkout';

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
          name="Home"
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="view-dashboard-outline" color={color} size={size} />
            ),
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Search"
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="magnify" color={color} size={size} />
            ),
          }}
          component={SearchScreen}
        />
        <Tab.Screen
          name="Favorites"
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="bookmark-outline" color={color} size={size} />
            ),
          }}
          component={FavoritesScreen}
        />
        <Tab.Screen
          name="Checkout"
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="cart-outline" color={color} size={size} />
            ),
          }}
          component={CheckoutScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
