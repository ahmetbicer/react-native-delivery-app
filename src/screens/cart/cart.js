import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Headline, Title } from 'react-native-paper';
import CartBottomSheet from '../../components/cart/cart-bottom-sheet';
import CartList from '../../components/cart/cart-list';
import colors from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';

export default function CartScreen(props) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [totalCost, setTotalCost] = useState(0);
  const [showCartBottomSheet, setShowCartBottomSheet] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    let dummyData = [
      { name: "Serve eggs", cost: 12, count: 1, key: 1 },
      { name: "Fries", cost: 15, count: 3, key: 2 },
      { name: "Onion Rings", cost: 16, count: 1, key: 3 },
      { name: "Hamburgers", cost: 14, count: 1, key: 4 }];

    setData(dummyData)
    setShowCartBottomSheet(true)
    setLoading(false)
  }, [])

  useEffect(() => {
    let total = data.reduce(function (prev, cur) {
      return prev + (cur.cost * cur.count);
    }, 0);
    setTotalCost(total)
  }, [data])

  function changeItemCount(item, count) {
    let tempData = [...data];
    var foundIndex = tempData.findIndex(x => x.key == item.key);
    tempData[foundIndex].count = count;
    setData(tempData)
  }

  function deleteItem(item) {
    let newData = data.filter(function (e) { return e !== item })
    setData(newData)
    if (newData.length == 0) {
      setShowCartBottomSheet(false);
    }
  }

  function goToCheckout() {
    navigation.navigate("Checkout", {
      items: data
    })
    // setData([])
    // setShowCartBottomSheet(false)
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
          <CartList
            data={data}
            showCartBottomSheet={showCartBottomSheet}
            deleteItem={deleteItem}
            changeItemCount={changeItemCount} />
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
});
