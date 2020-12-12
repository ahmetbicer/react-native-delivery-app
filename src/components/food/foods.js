import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import colors from '../../constants/colors';
import useFetch from '../../hooks/use-fetch';
import FoodItem from './food-item';

export default function Foods() {

  const params = {
    endpoint: "foods",
    method: "GET"
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
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
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
