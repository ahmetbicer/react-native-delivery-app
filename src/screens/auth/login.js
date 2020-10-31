import React, { useContext } from 'react';
import { View } from 'react-native';
import { Button, Title } from 'react-native-paper';
import colors from '../../constants/colors';
import { AuthContext } from '../../providers/AuthContext';

export default function LoginScreen(props) {
  const { login } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <Title>login</Title>
      <Button onPress={login}>login</Button>
    </View>
  );
}
