import React, { useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Title, Button } from 'react-native-paper';
import colors from '../../constants/colors';
import useFetch from '../../hooks/use-fetch';
import RestaurantFoodItem from './restaurant-food-item';

export default function RestaurantFoods(props) {

  const params = {
    endpoint: "restaurant/foods",
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
    <View style={styles.container}>
      <View style={styles.header_row}>
        <Title style={{ fontSize: 15 }}>Foods</Title>
        <Button
          compact={true}
          mode="contained"
          onPress={props.openBottomSheet}
          color={colors.yellow}>
          New Food
        </Button>
      </View>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.list_container}
        keyExtractor={item => item.id.toString()}
        renderItem={item => (
          <RestaurantFoodItem data={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    marginTop: 15,
  },
  list_container: {
    paddingHorizontal: 20
  },
  header_row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20
  }
});
