import React, { useState, useEffect, useRef, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import AppBar from '../../../components/common/app-bar';
import { CartContext } from '../../../providers/CartContext';
import AddressBottomSheet from '../../../components/checkout/address-bottom-sheet';
import CardsBottomSheet from '../../../components/checkout/cards-bottom-sheet';
import AddressSelector from '../../../components/checkout/address-selector';
import CardsSelector from '../../../components/checkout/cards-selector';
import apiFetch from '../../../hooks/api-fetch';
import CheckoutRestaurant from '../../../components/checkout/checkout-restaurant';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { StackActions, useNavigation } from '@react-navigation/native';
import useToast from '../../../hooks/use-toast';

export default function CheckoutScreen(props) {
  const { orders, deleteOrder } = useContext(CartContext);
  const navigation = useNavigation();

  const [restaurant, setRestaurant] = useState({});
  const [totalCost, setTotalCost] = useState(0);
  const [productCount, setProductCount] = useState(0);

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const cardsBottomSheetRef = useRef(null);
  const addressBottomSheetRef = useRef(null);

  useEffect(() => {
    getRestaurant();
    calculateTotal();
  }, [])

  async function getRestaurant() {
    let order_ = orders[0];

    const params = {
      endpoint: `restaurants/${order_.restaurant}`,
      method: "get",
      auth: true
    }

    let data = await apiFetch(params)

    setRestaurant(data)
  }

  function calculateTotal() {
    let total = orders.reduce(function (prev, cur) {
      return prev + (cur.cost * cur.count);
    }, 0);
    setTotalCost(total);
    setProductCount(orders.length);
  }

  function selectAddress(item) {
    setSelectedAddress(item);
  }

  function selectCard(item) {
    setSelectedCard(item);
  }

  async function completeOrder() {
    const params = {
      endpoint: "orders",
      method: "POST",
      body: {
        date: new Date(),
        total_cost: totalCost,
        restaurant: restaurant.id,
        payment: selectedCard.id,
        address: selectedAddress.id,
        orders: orders
      },
      auth: true
    }
    await apiFetch(params)
    deleteOrder();

    navigation.reset({
      index: 0,
      routes: [
        { name: 'Cart' },
        { name: 'OrderSuccessful' }
      ],
    });

    useToast({
      type: "success",
      text1: "Order Placed.",
      text2: "Thanks!"
    })
  }

  return (
    <BottomSheetModalProvider>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <AppBar screenName={props.route.name} />
        <View style={styles.container}>
          <View>
            <AddressSelector item={selectedAddress} cardsRef={cardsBottomSheetRef} addressRef={addressBottomSheetRef} />
            <CardsSelector item={selectedCard} cardsRef={cardsBottomSheetRef} addressRef={addressBottomSheetRef} />
            <CheckoutRestaurant productCount={productCount} totalCost={totalCost} restaurant={restaurant} />
          </View>
          <Button
            compact={true}
            mode="contained"
            contentStyle={{ height: 50 }}
            style={{ zIndex: 0 }}
            color={colors.yellow}
            onPress={completeOrder}>
            Complete Order
          </Button>
        </View>
        <AddressBottomSheet selectAddress={selectAddress} ref={addressBottomSheetRef} />
        <CardsBottomSheet selectCard={selectCard} ref={cardsBottomSheetRef} />
      </View>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between"
  }
})
