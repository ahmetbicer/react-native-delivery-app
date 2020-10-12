import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Title} from 'react-native-paper';
import colors from '../constants/colors';

export default function NumberSpinner(props) {
  const [count, setCount] = useState(0);

  const countDown = () => {
    let temp = count - 1;
    if (temp >= 0) {
      setCount(temp);
    }
  };

  const countUp = () => {
    let temp = count + 1;
    if (temp >= 0) {
      setCount(temp);
    }
  };

  return (
    <View
      style={{
        borderRadius: 5,
        borderWidth: 2,
        borderColor: colors.gray,
        width: 96,
        height: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          width: 32,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={countDown}>
        <Title style={{fontSize: 20, fontWeight: 'bold'}}>-</Title>
      </TouchableOpacity>
      <Title style={{fontSize: 16, fontWeight: 'bold'}}>{count}</Title>
      <TouchableOpacity
        style={{
          width: 32,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={countUp}>
        <Title style={{fontSize: 20, fontWeight: 'bold'}}>+</Title>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
