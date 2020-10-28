import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Paragraph, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';
import NumberSpinner from './number-spinner';

export default function CheckoutListItem(props) {
  return (
    <View key={props.item.key} style={styles.container}>
      <View style={styles.item}></View>
      <View style={styles.metadata_container}>
        <View style={{ marginLeft: 10 }}>
          <Title style={styles.title}>{props.item.name}</Title>
          <Title style={styles.rate_title}>${props.item.cost}</Title>
        </View>
        <NumberSpinner
          deleteItem={props.deleteItem}
          changeItemCount={props.changeItemCount}
          item={props.item} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 85,
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    width: 65,
    height: 65,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  metadata_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    letterSpacing: 0.75,
  },
  rate_title: {
    fontSize: 14,
  },
});
