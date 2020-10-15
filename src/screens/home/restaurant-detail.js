import * as React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import {Title} from 'react-native-paper';
import AppBar from '../../components/app-bar';
import PopularFoods from '../../components/popular-foods';
import colors from '../../constants/colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PopularRestaurantsItem from '../../components/popular-restaurants-item';
const Tab = createMaterialTopTabNavigator();

export default function RestaurantDetailScreen(props) {
  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
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
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <AppBar screenName={props.route.name} />
      <PopularRestaurantsItem image="https://image.freepik.com/free-photo/interior-modern-upmarket-restaurant_126745-1239.jpg" />
      <Tab.Navigator
        backBehavior={'none'}
        tabBarOptions={{
          scrollEnabled: true,
          style: {
            elevation: 0,
          },
          labelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
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
            component={PopularFoods}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
