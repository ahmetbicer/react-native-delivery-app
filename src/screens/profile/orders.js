import * as React from 'react';
import { useState } from 'react';
import { ScrollView, View, StyleSheet, RefreshControl } from 'react-native';
import { ActivityIndicator, Headline, Title } from 'react-native-paper';
import AppBar from '../../components/common/app-bar';
import Orders from '../../components/profile/orders/orders';
import colors from '../../constants/colors';

export default function OrdersScreen(props) {
  const [loading, setLoading] = useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {loading ?
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator color={colors.yellow} size="large" />
        </View>
        :
        <>
          <AppBar screenName={props.route.name} />
          <ScrollView refreshControl={
            <RefreshControl />
          } style={styles.container}>
            <Title style={styles.title}>
              My
              <Headline style={styles.subtitle}> Orders</Headline>
            </Title>
            <Orders />
          </ScrollView>
        </>
      }
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