import * as React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import PopularFoodsItem from './popular-foods-item';

export default function PopularFoods(props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <PopularFoodsItem />
      <PopularFoodsItem />
      <PopularFoodsItem />
      <PopularFoodsItem />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: colors.white,
  },
});
