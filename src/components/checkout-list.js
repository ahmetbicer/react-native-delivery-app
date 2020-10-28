import * as React from 'react';
import { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Text, Title } from 'react-native-paper';
import CheckoutListItem from './checkout-list-item';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';

export default function CheckoutList(props) {
  return (
    props.showCheckoutBottomSheet ?
      <FlatList
        style={{ marginTop: 10 }}
        data={props.data}
        renderItem={({ item }) => (
          <CheckoutListItem deleteItem={props.deleteItem} changeItemCount={props.changeItemCount} item={item} />
        )}
        keyExtractor={item => item.key.toString()}
      />
      :
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Icon name="emoticon-sad-outline" color={colors.gray} size={28} />
        <Title style={{ fontWeight: "100", color: colors.gray }}>Your cart is empty.</Title>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});
