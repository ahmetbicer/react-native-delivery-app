
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ActivityIndicator, Title, Headline } from 'react-native-paper';
import MapboxGL from "@react-native-mapbox-gl/maps";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import BottomSheet, { BottomSheetModalProvider, BottomSheetBackdrop, BottomSheetFlatList, TouchableOpacity } from '@gorhom/bottom-sheet';

import AppBar from '../../../components/common/app-bar';
import OrderDetailListItem from '../../../components/order-detail/order-detail-list-item';
import OrderStatus from '../../../components/order-detail/order-status';

import colors from '../../../constants/colors';

import apiFetch from '../../../hooks/api-fetch';
import useFetch from "../../../hooks/use-fetch";
import useInterval from '../../../hooks/use-interval';

MapboxGL.setAccessToken("pk.eyJ1IjoiYWhtZXRiIiwiYSI6ImNrY2FwaDZrdTFncnkyeXA4eDU2YTEwamsifQ._64KIEotv79vcA9KDjMMLw");

export default function OrderDetailsScreen(props) {
  const route = useRoute()
  const routeParams = route.params;
  const [orderStatus, setOrderStatus] = useState(routeParams.status);
  const [coordinates, setCoordinates] = useState([29.030472, 41.087084]);
  const [currentCoordinates, setCurrentCoordinates] = useState([-122.0821321, 37.4173526]);

  const driversBottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['1%', '50%'], []);

  const params = {
    endpoint: `order-details/${routeParams.id}`,
    method: "get",
    auth: true
  }

  const { status, data, refetch, setRefetch } = useFetch(params);

  useEffect(() => {
    if (orderStatus == "IN DELIVERY") {
      getCustomerLatLon();
      sendLocation()
    }
  }, [orderStatus, status])

  useInterval(() => {
    if (orderStatus == "IN DELIVERY") {
      sendLocation()
    }
  }, 5000)


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

  async function changeOrderState(state) {
    const params = {
      endpoint: `restaurant/change-order-state`,
      method: "PUT",
      auth: true,
      body: {
        id: routeParams.id,
        status: state
      }
    }

    await apiFetch(params)

    setRefetch(!refetch);
    setOrderStatus(state);
  }

  async function onUserLocationUpdate(loc) {
    setCurrentCoordinates([loc.coords.longitude, loc.coords.latitude])
  }

  async function sendLocation() {
    if (orderStatus == "IN DELIVERY") {
      const params = {
        endpoint: `location`,
        method: "POST",
        auth: true,
        body: {
          latitude: currentCoordinates[1],
          longitude: currentCoordinates[0],
          order: routeParams.id
        }
      }

      await apiFetch(params)
    }
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
            coordinates,
            currentCoordinates
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
          {(orderStatus == "DELIVERED" || orderStatus == "RATED") &&
            <>
              <Title style={styles.title}>
                Order
                <Headline style={styles.subtitle}> Detail</Headline>
              </Title>
              <OrderStatus status={orderStatus} />
              <Title style={{ fontSize: 15, marginTop: 15, paddingHorizontal: 15 }}>Orders</Title>
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
            </>
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
              <MapboxGL.Camera followUserLocation={true} followUserMode="normal" centerCoordinate={currentCoordinates} />
              <MapboxGL.ShapeSource id="line1" shape={route_}>
                <MapboxGL.LineLayer
                  id="linelayer1"
                  style={{
                    lineColor: 'red',
                    lineWidth: 3,
                  }}
                />
              </MapboxGL.ShapeSource>
              <MapboxGL.UserLocation onUpdate={onUserLocationUpdate} />
              <MapboxGL.PointAnnotation id="house" coordinate={coordinates} >
                <Icon name="home" size={25} color={colors.black} />
              </MapboxGL.PointAnnotation>
            </MapboxGL.MapView>
          }
        </View>
        {orderStatus == "IN DELIVERY" &&
          <BottomSheet
            ref={driversBottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            backdropComponent={BottomSheetBackdrop}
          >
            <Title style={{ fontSize: 15, marginTop: 15, paddingHorizontal: 15 }}>Orders</Title>
            <BottomSheetFlatList
              data={data}
              style={styles.food_container}
              keyExtractor={item => item.id.toString()}
              renderItem={item_ => {
                const { item } = item_;
                return (
                  <OrderDetailListItem item={item} />
                )
              }}
              ListFooterComponent={() => (
                <TouchableOpacity onPress={() => changeOrderState("DELIVERED")} style={styles.custom_button}>
                  <Title style={styles.custom_button_title}>CONFIRM DELIVERY</Title>
                </TouchableOpacity>
              )}
            />
          </BottomSheet>}
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
    paddingHorizontal: 15,
    marginTop: 15,
    flex: 1,
  },
  map_container: {
    flex: 1
  },
  custom_button: {
    backgroundColor: colors.yellow,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  custom_button_title: {
    fontSize: 16
  }
});