import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator, Headline, Title } from 'react-native-paper';
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
          <View style={styles.container}>
            <Title style={styles.title}>
              My
              <Headline style={styles.subtitle}> Orders</Headline>
            </Title>
          </View>
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    fontWeight: 'bold',
    letterSpacing: 0.75,
    paddingBottom: 15,
    borderColor: colors.gray,
    borderBottomWidth: 1
  },
  subtitle: {
    fontSize: 32,
    lineHeight: 36,
    marginVertical: 0,
    letterSpacing: 0.6,
  },
});