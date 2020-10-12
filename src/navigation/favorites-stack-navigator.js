import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FavoritesScreen from '../screens/favorites';

const FavoritesStack = createStackNavigator();

export default function FavoritesStackNavigator() {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen
        options={{headerShown: false}}
        name="Favorites"
        component={FavoritesScreen}
      />
    </FavoritesStack.Navigator>
  );
}
