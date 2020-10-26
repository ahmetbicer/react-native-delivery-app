import * as React from 'react';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Headline, Subheading, Title } from 'react-native-paper';
import AppBar from '../../components/app-bar';
import FoodCategories from '../../components/food-categories';
import PopularFoods from '../../components/popular-foods';
import PopularRestaurants from '../../components/popular-restaurants';
import colors from '../../constants/colors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialTopTabNavigator();

export default function HomeScreen(props) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <AppBar screenName={props.route.name} />
      <View style={styles.container}>
        <Title style={styles.title}>Let's Find</Title>
        <Headline style={styles.subtitle}>Something to Eat.</Headline>
        <Tab.Navigator
          backBehavior={'none'}
          style={{ flex: 3 }}
          sceneContainerStyle={{
            paddingHorizontal: 20,
            backgroundColor: colors.lightgray
          }}
          tabBarOptions={{
            showIcon: true,
            tabStyle: {
              flexDirection: "row",
            },
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
          <Tab.Screen
            name={"Restaurants"}
            component={PopularRestaurants}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="store" color={color} size={25} />
              ),
            }}
          />
          <Tab.Screen
            name={"Foods"}
            component={PopularFoods}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="hamburger" color={color} size={25} />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    paddingHorizontal: 20,
    fontSize: 32,
    lineHeight: 32,
    fontWeight: 'bold',
    letterSpacing: 0.75,
  },
  subtitle: {
    paddingHorizontal: 20,
    fontSize: 32,
    lineHeight: 36,
    marginVertical: 0,
    letterSpacing: 0.6,
  },
  popularRestaurants: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  pr_title: {
    fontSize: 21,
    color: colors.black,
    lineHeight: 32,
    fontWeight: 'bold',
    letterSpacing: 0.75,
  },
  pr_subtitle: {
    fontSize: 15,
    color: colors.black,
    fontWeight: 'bold',
    lineHeight: 36,
    marginVertical: 0,
    letterSpacing: 0.6,
  },
  popularFoods: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  pf_title: {
    fontSize: 21,
    color: colors.black,
    lineHeight: 32,
    fontWeight: 'bold',
    letterSpacing: 0.75,
  },
  pf_subtitle: {
    fontSize: 15,
    color: colors.black,
    fontWeight: 'bold',
    lineHeight: 36,
    marginVertical: 0,
    letterSpacing: 0.6,
  },
});
