import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import colors from '../../constants/colors';

export default function FoodDetailScreen() {
  const route = useRoute();
  const item = route.params.item;

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <Title>{item.name}</Title>
    </View>
  );
}

const styles = StyleSheet.create({});
