
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ActivityIndicator, Headline, Title } from 'react-native-paper';
import AppBar from '../../components/common/app-bar';
import OrderDetailListItem from '../../components/order-detail/order-detail-list-item';
import colors from '../../constants/colors';
import apiFetch from '../../hooks/api-fetch';
import useFetch from "../../hooks/use-fetch";
import { useRoute } from '@react-navigation/native';
import MapboxGL from "@react-native-mapbox-gl/maps";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OrderStatus from '../../components/order-detail/order-status';

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

  useEffect(() => {
    if (routeParams.status == "IN DELIVERY") {
      getCustomerAddress();
    }
  }, [status])

  async function getCustomerAddress() {
    if (data.length > 0) {
      let address_pk = data[0]?.order.address;

      const params = {
        endpoint: `address/get/${address_pk}`,
        method: "get",
        auth: true
      }

      const { lat, lon } = await apiFetch(params)
      console.log(lat, lon)
      setCoordinates([lon, lat])
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
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <AppBar screenName={props.route.name} />
      <View style={styles.container}>
        <Title style={styles.title}>
          Order
              <Headline style={styles.subtitle}> Detail</Headline>
        </Title>
        <OrderStatus status={routeParams.status} />
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
            <MapboxGL.PointAnnotation id="driver" coordinate={[36.268405, 41.2331]} >
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