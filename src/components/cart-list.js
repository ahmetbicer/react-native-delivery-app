import * as React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import CartListItem from './cart-list-item';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';

export default function CartList(props) {
  return (
    props.showCartBottomSheet ?
      <FlatList
        style={{ marginTop: 10 }}
        data={props.data}
        renderItem={({ item }) => (
          <CartListItem deleteItem={props.deleteItem} changeItemCount={props.changeItemCount} item={item} />
        )}
        keyExtractor={item => item.key.toString()}
      />
      :
      <View style={styles.container}>
        <Icon name="emoticon-sad-outline" color={colors.gray} size={28} />
        <Title style={{ fontWeight: "100", color: colors.gray }}>Your cart is empty.</Title>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
