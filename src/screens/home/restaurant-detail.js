import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import AppBar from '../../components/app-bar';
import Foods from '../../components/foods';
import colors from '../../constants/colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import RestaurantItem from '../../components/restaurant-item';
const Tab = createMaterialTopTabNavigator();

export default function RestaurantDetailScreen(props) {
  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
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
      <AppBar screenName={props.route.name} />
      <RestaurantItem image="https://image.freepik.com/free-photo/interior-modern-upmarket-restaurant_126745-1239.jpg" />
      <Tab.Navigator
        backBehavior={'none'}
        sceneContainerStyle={{
          backgroundColor: colors.white,
        }}
        tabBarOptions={{
          scrollEnabled: true,
          style: {
            elevation: 0,
          },
          labelStyle: {
            fontSize: 22,
            fontWeight: 'bold',
            textTransform: 'none',
          },
          indicatorStyle: {
            height: 0,
            backgroundColor: colors.white,
          },
        }}>
        {DATA.map((item) => (
          <Tab.Screen
            name={item.title}
            key={item.title}
            component={Foods}
            initialParams={{item: item}}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
});
