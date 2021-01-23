import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { ActivityIndicator, Headline, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../../../providers/CartContext';
import CartListItem from '../../../components/cart/cart-list-item';
import CartBottomSheet from '../../../components/cart/cart-bottom-sheet';
import colors from '../../../constants/colors';

export default function CartScreen(props) {
  const { orders, changeQuantity, removeFromCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [totalCost, setTotalCost] = useState(0);
  const [showCartBottomSheet, setShowCartBottomSheet] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener("focus", () => {
      if (orders?.length != 0) {
        setData([...orders]);
        setShowCartBottomSheet(true);
      }
      else {
        setData([]);
        setShowCartBottomSheet(false);
      }
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    let total = data.reduce(function (prev, cur) {
      return prev + (cur.cost * cur.count);
    }, 0);
    setTotalCost(total);
  }, [data])

  function changeItemCount(item, count) {
    changeQuantity(item, count);

    let tempData = [...data];
    var foundIndex = tempData.findIndex(x => x.key == item.key);
    tempData[foundIndex].count = count;
    setData(tempData);
  }

  function deleteItem(item) {
    removeFromCart(item);

    let tempData = data.filter(function (e) { return e !== item });
    setData(tempData);
    if (tempData.length == 0) {
      setShowCartBottomSheet(false);
    }
  }

  function goToCheckout() {
    navigation.navigate("Checkout");
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {loading ?
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator color={colors.yellow} size="large" />
        </View>
        :
        <View style={styles.container}>
          <Title style={styles.title}>
            My
          <Headline style={styles.subtitle}> Cart</Headline>
          </Title>
          {showCartBottomSheet ?
            <FlatList
              style={{ marginTop: 10 }}
              data={data}
              renderItem={({ item }) => (
                <CartListItem deleteItem={deleteItem} changeItemCount={changeItemCount} item={item} />
              )}
              keyExtractor={item => item.id.toString()}
            />
            :
            <View style={styles.bottom_sheet_container}>
              <Icon name="emoticon-sad-outline" color={colors.gray} size={28} />
              <Title style={{ fontWeight: "100", color: colors.gray }}>Your cart is empty.</Title>
            </View>
          }
        </View>}
      {showCartBottomSheet &&
        <CartBottomSheet goToCheckout={goToCheckout} total={totalCost} />
      }
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    fontWeight: 'bold',
    letterSpacing: 0.75,
  },
  subtitle: {
    fontSize: 32,
    lineHeight: 36,
    marginVertical: 0,
    letterSpacing: 0.6,
  },
  bottom_sheet_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});
