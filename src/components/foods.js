import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import FoodsItem from './foods-item';

export default function Foods(props) {
  const DATA = props.route?.params?.item?.data;

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {DATA?.map((item) => (
        <FoodsItem item={item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    backgroundColor: colors.lightyellow
    // backgroundColor: colors.white,
  },
});
