import * as React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import CheckoutListItem from './checkout-list-item';

export default function CheckoutList(props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <CheckoutListItem />
      <CheckoutListItem />
      <CheckoutListItem />
      <CheckoutListItem />
      <CheckoutListItem />
      <CheckoutListItem />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});
