import * as React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import PopularRestaurantsItem from './popular-restaurants-item';

export default function PopularRestaurants(props) {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      <PopularRestaurantsItem />
      <PopularRestaurantsItem />
      <PopularRestaurantsItem />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});
