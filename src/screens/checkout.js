import * as React from 'react';
import {useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Button, Subheading, Title} from 'react-native-paper';
import AppBar from '../components/app-bar';
import CheckoutBottomSheet from '../components/checkout-bottom-sheet';
import colors from '../constants/colors';

export default function CheckoutScreen(props) {
  return (
    <View style={{flex: 1}}>
      <AppBar screenName={props.route.name} />
      <Text>Checkout</Text>
      <CheckoutBottomSheet />
    </View>
  );
}
