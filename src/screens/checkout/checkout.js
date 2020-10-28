import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline, Title } from 'react-native-paper';
import AppBar from '../../components/app-bar';
import CheckoutBottomSheet from '../../components/checkout-bottom-sheet';
import CheckoutList from '../../components/checkout-list';

export default function CheckoutScreen(props) {
  const [data, setData] = useState([])
  const [totalCost, setTotalCost] = useState(0);
  const [showCheckoutBottomSheet, setShowCheckoutBottomSheet] = useState(false);

  useEffect(() => {
    let dummyData = [
      { name: "Serve eggs", cost: 12, count: 1, key: 1 },
      { name: "Fries", cost: 15, count: 3, key: 2 },
      { name: "Onion Rings", cost: 16, count: 1, key: 3 },
      { name: "Hamburgers", cost: 14, count: 1, key: 4 }];

    setData(dummyData)
    setShowCheckoutBottomSheet(true)
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
      setShowCheckoutBottomSheet(false);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <AppBar screenName={props.route.name} />
      <View style={styles.container}>
        <Title style={styles.title}>
          My
          <Headline style={styles.subtitle}> Cart</Headline>
        </Title>
        <CheckoutList
          data={data}
          showCheckoutBottomSheet={showCheckoutBottomSheet}
          deleteItem={deleteItem}
          changeItemCount={changeItemCount} />
      </View>
      {showCheckoutBottomSheet &&
        <CheckoutBottomSheet total={totalCost} />
      }
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
