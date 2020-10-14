import * as React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import PopularRestaurantsItem from './popular-restaurants-item';

export default function PopularRestaurants(props) {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      <PopularRestaurantsItem image="https://image.freepik.com/free-photo/interior-modern-upmarket-restaurant_126745-1239.jpg" />
      <PopularRestaurantsItem image="https://image.freepik.com/free-photo/cozy-restaurant-with-people-waiter_175935-230.jpg" />
      <PopularRestaurantsItem image="https://image.freepik.com/free-photo/luxury-tableware-beautiful-table-setting-restaurant_73492-239.jpg" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});
