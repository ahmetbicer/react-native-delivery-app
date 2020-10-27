import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import FoodItem from './food-item';

export default function Foods(props) {
  let DATA = ['French Fries', 'Onion Rings', 'Fried Shrimps', 'Fried Tacos'];
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {DATA?.map((item) => (
        <FoodItem item={item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: colors.lightgray,
  },
});
