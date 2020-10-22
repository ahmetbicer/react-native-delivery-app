import * as React from 'react';
import {Text, View} from 'react-native';
import AppBar from '../../components/app-bar';

export default function OrdersScreen(props) {
  return (
    <View>
      <AppBar screenName={props.route.name} />
      <Text>Home!</Text>
    </View>
  );
}
