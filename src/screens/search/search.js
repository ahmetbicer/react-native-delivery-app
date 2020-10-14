import * as React from 'react';
import {Text, View} from 'react-native';
import AppBar from '../../components/app-bar';

export default function SearchScreen(props) {
  return (
    <View>
      <AppBar screenName={props.route.name} />
      <Text>Search</Text>
    </View>
  );
}
