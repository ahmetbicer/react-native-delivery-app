import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { ActivityIndicator, Paragraph, Title } from 'react-native-paper';
import FoodItem from '../../../components/food/food-item';
import FoodHeaderItem from '../../../components/food/food-header-item';
import colors from '../../../constants/colors';
import useFetch from '../../../hooks/use-fetch';
import { useRoute } from '@react-navigation/native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

function Overview(props) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white, justifyContent: "center", alignItems: "center" }}>
      <Paragraph>
        {props.item.description}
      </Paragraph>
      <Paragraph>
        {props.item.calories} Calories
      </Paragraph>
    </View>
  )
}

export default function FoodDetailScreen() {
  const route = useRoute();
  const item = route.params.item;

  return (
    <View style={styles.container}>
      <FoodHeaderItem item={item} />
      <View style={styles.bottom_container}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.container_one}>
            <Title style={{ fontWeight: "bold" }}>{item.name}</Title>
          </View>
          <View style={styles.container_two}>
            <Title style={{ fontWeight: "bold" }}>${item.cost}.00</Title>
          </View>
        </View>
        <View style={styles.container_three}>
          <Tab.Navigator
            backBehavior={'none'}
            tabBarOptions={{
              style: {
                elevation: 0,
              },
              labelStyle: {
                fontSize: 14,
              },
              indicatorStyle: {
                height: 2,
                backgroundColor: colors.yellow,
              },
            }}>
            <Tab.Screen name={"Overview"} key={"Overview"}>
              {() => <Overview item={item} />}
            </Tab.Screen>
          </Tab.Navigator>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottom_container: {
    flex: 1,
    backgroundColor: colors.lightgray,
  },
  container_one: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderRightWidth: 0.25,
    borderRightColor: colors.gray,
    borderBottomColor: colors.gray,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center"
  },
  container_two: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.25,
    borderLeftColor: colors.gray,
    borderBottomColor: colors.gray,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center"
  },
  container_three: {
    flex: 3,
    flexDirection: "row"
  }
});
