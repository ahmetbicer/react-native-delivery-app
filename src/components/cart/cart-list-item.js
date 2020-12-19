import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import NumberSpinner from './number-spinner';

export default function CartListItem(props) {
  return (
    <View key={props.item.key} style={styles.container}>
      <Image source={{ uri: props.item.image }} style={styles.item} />
      <View style={styles.metadata_container}>
        <View style={styles.metadata_titles}>
          <Title style={styles.name_title}>{props.item.name}</Title>
          <Title style={styles.cost_title}>${props.item.cost}</Title>
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
    height: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  metadata_titles: {
    flex: 1,
    height: 65,
    justifyContent: "space-around",
    marginLeft: 10,
  },
  name_title: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    letterSpacing: 0.75,
  },
  cost_title: {
    fontSize: 14,
    lineHeight: 14,
  },
});
