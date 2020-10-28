import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RestaurantHeaderItem from '../../components/restaurant/restaurant-header-item';
import Foods from '../../components/food/foods';
import colors from '../../constants/colors';

const Tab = createMaterialTopTabNavigator();

export default function RestaurantDetailScreen(props) {
  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto', 'Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps', 'Fried Tacos'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
    {
      title: 'Burgers',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  return (
    <View style={styles.container}>
      <RestaurantHeaderItem image={props.route.params.image} />
      <Tab.Navigator
        backBehavior={'none'}
        style={{ flex: 3 }}
        sceneContainerStyle={{
          paddingHorizontal: 20,
          backgroundColor: colors.lightgray
        }}
        tabBarOptions={{
          scrollEnabled: true,
          style: {
            elevation: 0,
          },
          labelStyle: {
            fontSize: 19,
            fontWeight: 'bold',
            textTransform: 'none',
          },
          indicatorStyle: {
            height: 3,
            backgroundColor: colors.yellow
          },
        }}>
        {DATA.map((item) => (
          <Tab.Screen
            name={item.title}
            key={item.title}
            component={Foods}
            initialParams={{ item: item }}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
});
