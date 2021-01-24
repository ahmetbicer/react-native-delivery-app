import React, { useState } from 'react';
import { FlatList, StyleSheet, View, RefreshControl } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import colors from '../../constants/colors';
import useFetch from '../../hooks/use-fetch';
import FoodItem from './food-item';

export default function Foods() {

  const params = {
    endpoint: "foods",
    method: "GET",
    auth: true
  }
  const { status, data, refetch, setRefetch } = useFetch(params);
  const [refreshing, setRefreshing] = useState(false);

  async function onRefresh() {
    setRefreshing(true);
    setRefetch(!refetch);
    setRefreshing(false);
  }

  if (status == "loading") {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color={colors.yellow} size={"large"} />
      </View>
    )
  }

  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={styles.container}
      keyExtractor={item => item.id.toString()}
      renderItem={item => (
        <FoodItem data={item} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: colors.lightgray,
  },
});
