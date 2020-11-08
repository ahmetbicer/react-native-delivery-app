import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import colors from '../../constants/colors';
import FoodItem from './food-item';

export default function Foods(props) {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    async function getFoods() {
      setLoading(true);
      let data = await AsyncStorage.getItem("user");
      let { token } = await JSON.parse(data);

      let response = await fetch("http://10.0.2.2:8000/api/foods", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        }
      })

      if (response.status == 200) {
        let data = await response.json()
        setFoods(data);
        setRefreshing(false);
      }
      setLoading(false);
    }

    getFoods();
  }, [refreshing])


  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color={colors.yellow} size={"large"} />
      </View>
    )
  }

  return (
    <FlatList
      data={foods}
      showsVerticalScrollIndicator={false}
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={() => setRefreshing(true)} />
      }
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
