import * as React from 'react';
import { useState, useContext } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Title, Button } from 'react-native-paper';
import colors from '../../constants/colors';
import { useRoute } from '@react-navigation/native';
import AppBar from '../common/app-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CartContext } from '../../providers/CartContext';

export default function FoodHeaderItem(props) {
  const { addToCart } = useContext(CartContext);
  const item = props.item;
  const [favorite, setFavorite] = useState(false)
  const [count, setCount] = useState(1);
  const route = useRoute();

  function countUp() {
    setCount(count + 1);
  }

  function countDown() {
    if (count != 1) {
      setCount(count - 1)
    }
  }

  function addToCart_() {
    let order = item;
    order.count = count;
    addToCart(order)
  }

  return (
    <ImageBackground
      source={{
        uri: item.image,
      }}
      style={styles.item}>
      <View style={styles.container}>
        <AppBar favorite={favorite} setFavorite={setFavorite} screenName={route.name} title={item.name} />
        <View style={styles.bottom_container}>
          <View
            style={{
              borderRadius: 5,
              backgroundColor: colors.white,
              width: 129,
              height: 40,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: 43,
                height: 40,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderRightWidth: 1,
                borderRightColor: colors.gray,
                backgroundColor: colors.yellow
              }}
              onPress={countDown}>
              <Title style={{ fontSize: 20, fontWeight: '100' }}>-</Title>
            </TouchableOpacity>
            <Title style={{ fontSize: 16, fontWeight: '100' }}>{count}</Title>
            <TouchableOpacity
              style={{
                width: 43,
                height: 40,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderLeftWidth: 1,
                borderLeftColor: colors.gray,
                backgroundColor: colors.yellow
              }}
              onPress={countUp}>
              <Title style={{ fontSize: 20, fontWeight: '100' }}>+</Title>
            </TouchableOpacity>
          </View>
          <Button
            mode="contained"
            contentStyle={{
              height: 40,
            }}
            style={{ marginBottom: 20 }}
            color={colors.yellow}
            onPress={addToCart_}>
            ADD TO CART
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  bottom_container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
