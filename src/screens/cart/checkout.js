import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from '../../components/common/app-bar';
import Cards from '../../components/profile/payment/cards';
import { CartContext } from '../../providers/CartContext';

export default function CheckoutScreen(props) {
  const { orders, deleteOrder } = useContext(CartContext);

  useEffect(() => {
    console.log(orders);
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <AppBar screenName={props.route.name} />
      <View style={styles.container}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  }
})
