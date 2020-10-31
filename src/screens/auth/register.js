import * as React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import colors from '../../constants/colors';

export default function RegisterScreen(props) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <Title>register</Title>
    </View>
  );
}