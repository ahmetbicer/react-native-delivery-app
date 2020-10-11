import * as React from 'react';
import {useEffect} from 'react';
import {Dimensions, Text, View} from 'react-native';
import AppBar from '../components/app-bar';
import colors from '../constants/colors';

export default function CheckoutScreen(props) {
  useEffect(() => {
    console.log(props);
  });

  return (
    <View>
      <AppBar screenName={props.route.name} />
      <Text>Checkout</Text>
    </View>
  );
}
