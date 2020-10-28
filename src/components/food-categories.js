import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import FoodCategoriesItem from './food-categories-item';

export default function FoodCategories(props) {
  return (
    <View style={styles.container}>
      <FoodCategoriesItem index={0} />
      <FoodCategoriesItem index={1} />
      <FoodCategoriesItem index={2} />
      <FoodCategoriesItem index={3} />
      <FoodCategoriesItem index={0} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
