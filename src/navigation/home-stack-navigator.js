import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home';

const HomeStack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
    </HomeStack.Navigator>
  );
}
