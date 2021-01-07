
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ActivityIndicator, Headline, Title, Button } from 'react-native-paper';
import AppBar from '../../../components/common/app-bar';
import OrderDetailListItem from '../../../components/order-detail/order-detail-list-item';
import colors from '../../../constants/colors';
import apiFetch from '../../../hooks/api-fetch';
import useFetch from "../../../hooks/use-fetch";
import { useRoute } from '@react-navigation/native';
import MapboxGL from "@react-native-mapbox-gl/maps";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OrderStatus from '../../../components/order-detail/order-status';
import useInterval from '../../../hooks/use-interval';
import { Rating } from 'react-native-ratings';

MapboxGL.setAccessToken("pk.eyJ1IjoiYWhtZXRiIiwiYSI6ImNrY2FwaDZrdTFncnkyeXA4eDU2YTEwamsifQ._64KIEotv79vcA9KDjMMLw");
export default function OrderDetailsScreen(props) {
  const route = useRoute()
  const routeParams = route.params;

  const params = {
    endpoint: `order-details/${routeParams.id}`,
    method: "get",
    auth: true
  }

  const { status, data } = useFetch(params);
  const [coordinates, setCoordinates] = useState([29.030472, 41.087084]);
  const [driverCoordinates, setDriverCoordinates] = useState([36.268405, 41.2331]);

  useEffect(() => {
    if (routeParams.status == "IN DELIVERY") {
      getCustomerAddress();
    }
  }, [status])

  useInterval(() => {
    getLocation()
  }, 60000)

  async function getLocation() {
    if (data.length > 0) {
      let order_pk = data[0].order.id;

      const params = {
        endpoint: `location/${order_pk}`,
        method: "get",
        auth: true
      }

      try {

        const { latitude, longitude } = await apiFetch(params)
        setDriverCoordinates([longitude, latitude])

      } catch (error) {
        console.log(error)
      }
    }
  }

  async function getCustomerAddress() {
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

  async function giveRating() {
    console.log("rate")
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
            driverCoordinates,
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
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <AppBar screenName={props.route.name} />
      <View style={styles.container}>
        <Title style={styles.title}>
          Order
              <Headline style={styles.subtitle}> Detail</Headline>
        </Title>
        <OrderStatus status={routeParams.status} />

        {routeParams.status == "DELIVERED" &&
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="store" size={25} />
                <Title style={{ marginLeft: 5 }}>Restaurant</Title>
              </View>
              <Rating
                type={"custom"}
                ratingColor={colors.yellow}
                startingValue={5}
                imageSize={20}
                style={{ paddingVertical: 10 }}
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="hamburger" size={25} />
                <Title style={{ marginLeft: 5 }}>Food</Title>
              </View>
              <Rating
                type={"custom"}
                ratingColor={colors.yellow}
                startingValue={5}
                imageSize={20}
                style={{ paddingVertical: 10 }}
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="moped" size={25} />
                <Title style={{ marginLeft: 5 }}>Driver</Title>
              </View>
              <Rating
                type={"custom"}
                ratingColor={colors.yellow}
                startingValue={5}
                imageSize={20}
                style={{ paddingVertical: 10 }}
              />
            </View>
            <Button
              compact={true}
              mode="contained"
              onPress={giveRating}
              style={{ marginTop: 20 }}
              color={colors.yellow}>
              Rate
            </Button>
          </View>
        }

        {routeParams.status == "IN DELIVERY" &&
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
            <MapboxGL.PointAnnotation id="driver" coordinate={driverCoordinates} >
              <Icon name="moped" size={25} color={colors.black} />
            </MapboxGL.PointAnnotation>
          </MapboxGL.MapView>
        }
        <Title style={{ fontSize: 15 }}>Orders</Title>
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
    </View>
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