import React, { useState, useEffect, useRef, useContext } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import AppBar from '../../components/common/app-bar';
import { CartContext } from '../../providers/CartContext';
import AddressBottomSheet from '../../components/checkout/address-bottom-sheet';
import CardsBottomSheet from '../../components/checkout/cards-bottom-sheet';
import AddressSelector from '../../components/checkout/address-selector';
import CardsSelector from '../../components/checkout/cards-selector';
import { Button, Divider, Title } from 'react-native-paper';
import apiFetch from '../../hooks/api-fetch';
import EstimatedDeliveryTime from '../../components/checkout/est-delivery-time';

export default function CheckoutScreen(props) {
  const { orders, deleteOrder } = useContext(CartContext);
  const [deliveryTime, setDeliveryTime] = useState(0);
  const cardsBottomSheetRef = useRef(null);
  const addressBottomSheetRef = useRef(null);

  useEffect(() => {
    getRestaurant();
  }, [])

  async function getRestaurant() {
    let order_ = orders[0];

    const params = {
      endpoint: `restaurants/${order_.restaurant}`,
      method: "get",
      auth: false
    }

    let data = await apiFetch(params)

    setDeliveryTime(data.delivery_time)
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <AppBar screenName={props.route.name} />
      <View style={styles.container}>
        <View>
          <AddressSelector cardsRef={cardsBottomSheetRef} addressRef={addressBottomSheetRef} />
          <CardsSelector cardsRef={cardsBottomSheetRef} addressRef={addressBottomSheetRef} />
        </View>
        <EstimatedDeliveryTime deliveryTime={deliveryTime} />
        <Button
          compact={true}
          mode="contained"
          contentStyle={{ height: 50 }}
          color={colors.yellow}
          onPress={() => { }}>
          Complete Order
        </Button>
        <AddressBottomSheet ref={addressBottomSheetRef} />
        <CardsBottomSheet ref={cardsBottomSheetRef} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between"
  },
  contentContainer: {
  }
})
