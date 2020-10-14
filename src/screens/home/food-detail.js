import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Title} from 'react-native-paper';
import colors from '../../constants/colors';

export default function FoodDetailScreen(props) {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <Title>food detail</Title>
    </View>
  );
}

const styles = StyleSheet.create({});
