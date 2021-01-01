import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import FoodItem from '../../../components/food/food-item';
import RestaurantHeaderItem from '../../../components/restaurant/restaurant-header-item';
import colors from '../../../constants/colors';
import useFetch from '../../../hooks/use-fetch';
import { useRoute } from '@react-navigation/native';

export default function RestaurantDetailScreen() {
  const route = useRoute();
  const item = route.params.item;

  const params = {
    endpoint: `restaurants/${item.id}/foods`,
    method: "GET",
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
    <View style={styles.container}>
      <RestaurantHeaderItem item={item} />
      <View style={styles.food_container}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          style={styles.food_container}
          keyExtractor={item => item.id.toString()}
          renderItem={item => (
            <FoodItem data={item} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  food_container: {
    flex: 3,
    marginTop: 15,
    paddingHorizontal: 10,
    backgroundColor: colors.lightgray,
  }
});
