import * as React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Paragraph, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';
import NumberSpinner from './number-spinner';

export default function CheckoutListItem(props) {
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
          <NumberSpinner />
          <Icon name="delete-outline" color={colors.black} size={28} />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: -5,
  },
  rm_title: {
    marginLeft: 5,
    fontSize: 14,
    color: colors.gray,
  },
});
