import * as React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Paragraph, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';

export default function CheckoutListItem(props) {
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
    <View style={styles.container}>
      <View style={styles.item}></View>
      <View style={{flex: 1}}>
        <View style={styles.metadata_container}>
          <Title style={styles.title}>Serve Eggs</Title>
          <View style={styles.rate}>
            <Title style={styles.rate_title}>$12</Title>
          </View>
        </View>
        <View style={styles.restaurant_metadata}>
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
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 85,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    width: 85,
    height: 65,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  metadata_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    letterSpacing: 0.75,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rate_title: {
    marginLeft: 5,
    fontSize: 14,
  },
  restaurant_metadata: {
    maxWidth: '85%',
    paddingHorizontal: 10,
    marginTop: -5,
  },
  rm_title: {
    marginLeft: 5,
    fontSize: 14,
    color: colors.gray,
  },
});
