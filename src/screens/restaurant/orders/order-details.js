
import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ActivityIndicator, Headline, Title, Button } from 'react-native-paper';
import MapboxGL from "@react-native-mapbox-gl/maps";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import OrderStatus from '../../../components/order-detail/order-status';
import AppBar from '../../../components/common/app-bar';
import OrderDetailListItem from '../../../components/order-detail/order-detail-list-item';
import DriversBottomSheet from '../../../components/order-detail/drivers-bottom-sheet';

import colors from '../../../constants/colors';
import apiFetch from '../../../hooks/api-fetch';
import useFetch from "../../../hooks/use-fetch";

MapboxGL.setAccessToken("pk.eyJ1IjoiYWhtZXRiIiwiYSI6ImNrY2FwaDZrdTFncnkyeXA4eDU2YTEwamsifQ._64KIEotv79vcA9KDjMMLw");

export default function OrderDetailsScreen(props) {
  const route = useRoute()
  const routeParams = route.params;
  const [orderStatus, setOrderStatus] = useState(routeParams.status);
  const [coordinates, setCoordinates] = useState([29.030472, 41.087084]);

  const driversBottomSheetRef = useRef(null);

  const params = {
    endpoint: `order-details/${routeParams.id}`,
    method: "get",
    auth: true
  }

  const { status, data, refetch, setRefetch } = useFetch(params);

  useEffect(() => {
    if (orderStatus == "IN DELIVERY") {
      getCustomerLatLon();
    }
    if (data.length > 0) {
      setOrderStatus(data[0]?.order.status)
    }
  }, [status])

  async function getCustomerLatLon() {
    if (data.length > 0) {
      let address_pk = data[0]?.order.address;

      const params = {
        endpoint: `address/get/${address_pk}`,
        method: "get",
        auth: true
      }

      const { lat, lon } = await apiFetch(params)
      setCoordinates([lon, lat])
    }
  }

  async function changeOrderState(state, driver_ = null) {
    const params = {
      endpoint: `restaurant/change-order-state`,
      method: "PUT",
      auth: true,
      body: {
        id: routeParams.id,
        status: state,
        ...(driver_ != null && { driver: driver_ })
      }
    }

    await apiFetch(params)

    setRefetch(!refetch);
  }

  async function assignDriver(driver) {
    changeOrderState("IN DELIVERY", driver)
  }

  if (status == "loading") {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color={colors.yellow} size={"large"} />
      </View>
    )
  }

  const route_ = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: [
            coordinates, //point A "current" ~ From
            [36.268405, 41.2331], //Point B ~ to
          ],
        },
        style: {
          fill: 'red',
          strokeWidth: '10',
          fillOpacity: 0.6,
        },
        paint: {
          'fill-color': '#088',
          'fill-opacity': 0.8,
        },
      },
    ],
  };

  return (
    <BottomSheetModalProvider>
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <AppBar screenName={props.route.name} />
        <View style={styles.container}>
          <Title style={styles.title}>
            Order
              <Headline style={styles.subtitle}> Detail</Headline>
          </Title>
          <OrderStatus status={orderStatus} />
          {orderStatus == "WAITING" &&
            <Button
              compact={true}
              mode="contained"
              onPress={() => { changeOrderState("CONFIRMED") }}
              color={colors.yellow}>
              CONFIRM ORDER
          </Button>
          }
          {orderStatus == "CONFIRMED" &&
            <Button
              compact={true}
              mode="contained"
              onPress={() => driversBottomSheetRef.current.present()}
              color={colors.yellow}>
              ASSIGN DRIVER
          </Button>
          }
          {orderStatus == "IN DELIVERY" &&
            <MapboxGL.MapView
              zoomLevel={6}
              compassEnabled={true}
              zoomEnabled={true}
              pitchEnabled={false}
              style={styles.map_container}
              styleURL={"mapbox://styles/ahmetb/ckgm0ug5b0ium19mqep82qlka"}
            >
              <MapboxGL.Camera
                defaultSettings={{
                  centerCoordinate: [36.248405, 41.3331],
                }}
                zoomLevel={8}
              />
              <MapboxGL.ShapeSource id="line1" shape={route_}>
                <MapboxGL.LineLayer
                  id="linelayer1"
                  style={{
                    lineColor: 'red',
                    lineWidth: 3,
                  }}
                />
              </MapboxGL.ShapeSource>
              <MapboxGL.PointAnnotation id="house" coordinate={coordinates} >
                <Icon name="home" size={25} color={colors.black} />
              </MapboxGL.PointAnnotation>
              <MapboxGL.PointAnnotation id="driver" coordinate={[36.268405, 41.2331]} >
                <Icon name="moped" size={25} color={colors.black} />
              </MapboxGL.PointAnnotation>
            </MapboxGL.MapView>
          }
          <Title style={{ fontSize: 15, marginTop: 15 }}>Orders</Title>
          <FlatList
            data={data}
            style={styles.food_container}
            keyExtractor={item => item.id.toString()}
            renderItem={item_ => {
              const { item } = item_;
              return (
                <OrderDetailListItem item={item} />
              )
            }}
          />
        </View>
        <DriversBottomSheet ref={driversBottomSheetRef} assignDriver={assignDriver} />
      </View>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    fontWeight: 'bold',
    letterSpacing: 0.75,
    paddingBottom: 15,
  },
  subtitle: {
    fontSize: 32,
    lineHeight: 36,
    marginVertical: 0,
    letterSpacing: 0.6,
  },
  food_container: {
    marginTop: 15,
    flex: 1,
  },
  map_container: {
    flex: 1
  }
});