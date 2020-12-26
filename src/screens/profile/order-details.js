import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import { ScrollView, View, StyleSheet, RefreshControl } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ActivityIndicator, Headline, Title } from 'react-native-paper';
import AppBar from '../../components/common/app-bar';
import OrderDetailListItem from '../../components/order-detail/order-detail-list-item';
import Orders from '../../components/profile/orders/orders';
import colors from '../../constants/colors';
import useFetch from "../../hooks/use-fetch";

export default function OrderDetailsScreen(props) {
  const route = useRoute()
  const routeParams = route.params;

  const params = {
    endpoint: `order-details/${routeParams.id}`,
    method: "get",
    auth: true
  }

  const { status, data } = useFetch(params);

  if (status == "loading") {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color={colors.yellow} size={"large"} />
      </View>
    )
  }

  console.log(data)
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <AppBar screenName={props.route.name} />
      <View style={styles.container}>
        <Title style={styles.title}>
          Order
              <Headline style={styles.subtitle}> Detail</Headline>
        </Title>
        <FlatList
          data={data}
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
});