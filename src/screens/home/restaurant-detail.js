import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Title} from 'react-native-paper';
import colors from '../../constants/colors';

export default function RestaurantDetailScreen(props) {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <Title>restaurant detail</Title>
    </View>
  );
}

const styles = StyleSheet.create({});
