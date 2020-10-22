import * as React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import PopularFoodsItem from './popular-foods-item';

export default function PopularFoods(props) {
  let DATA = ['French Fries', 'Onion Rings', 'Fried Shrimps', 'Fried Tacos'];
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {DATA?.map((item) => (
        <PopularFoodsItem item={item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
