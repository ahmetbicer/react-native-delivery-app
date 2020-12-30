import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../../screens/user/search/search';

const SearchStack = createStackNavigator();

export default function SearchStackNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        options={{ headerShown: false }}
        name="Search"
        component={SearchScreen}
      />
    </SearchStack.Navigator>
  );
}
