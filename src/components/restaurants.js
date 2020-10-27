import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import RestaurantItem from './restaurant-item';

export default function Restaurants(props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <RestaurantItem image="https://image.freepik.com/free-photo/interior-modern-upmarket-restaurant_126745-1239.jpg" />
      <RestaurantItem image="https://image.freepik.com/free-photo/cozy-restaurant-with-people-waiter_175935-230.jpg" />
      <RestaurantItem image="https://image.freepik.com/free-photo/luxury-tableware-beautiful-table-setting-restaurant_73492-239.jpg" />
      <RestaurantItem image="https://image.freepik.com/free-photo/luxury-tableware-beautiful-table-setting-restaurant_73492-239.jpg" />
      <RestaurantItem image="https://image.freepik.com/free-photo/luxury-tableware-beautiful-table-setting-restaurant_73492-239.jpg" />
      <RestaurantItem image="https://image.freepik.com/free-photo/luxury-tableware-beautiful-table-setting-restaurant_73492-239.jpg" />
      <RestaurantItem image="https://image.freepik.com/free-photo/luxury-tableware-beautiful-table-setting-restaurant_73492-239.jpg" />
      <RestaurantItem image="https://image.freepik.com/free-photo/luxury-tableware-beautiful-table-setting-restaurant_73492-239.jpg" />
      <RestaurantItem image="https://image.freepik.com/free-photo/luxury-tableware-beautiful-table-setting-restaurant_73492-239.jpg" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: colors.lightgray
  },
});
