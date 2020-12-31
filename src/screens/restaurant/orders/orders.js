import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator, Headline, Title } from 'react-native-paper';
import AppBar from '../../../components/common/app-bar';
import Orders from '../../../components/profile/orders/orders';
import colors from '../../../constants/colors';
import useFetch from "../../../hooks/use-fetch";

export default function OrdersScreen(props) {

  const params = {
    endpoint: "restaurant/orders",
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

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.container}>
        <Title style={styles.title}>
          Restaurant
              <Headline style={styles.subtitle}> Orders</Headline>
        </Title>
        <Orders data={data} />
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