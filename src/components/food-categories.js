import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import FoodCategoriesItem from './food-categories-item';

export default function FoodCategories(props) {
  return (
    <View style={styles.container}>
      <FoodCategoriesItem />
      <FoodCategoriesItem />
      <FoodCategoriesItem />
      <FoodCategoriesItem />
      <FoodCategoriesItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
