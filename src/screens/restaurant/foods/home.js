import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline, Title } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Foods from '../../../components/food/foods';
import Restaurants from '../../../components/restaurant/restaurants';
import colors from '../../../constants/colors';

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen(props) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.container}>
        <Title style={styles.title}>Let's Find</Title>
        <Headline style={styles.subtitle}>Something to Eat.</Headline>
        <Tab.Navigator
          lazy={true}
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
            component={Restaurants}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="store" color={color} size={25} />
              ),
            }}
          />
          <Tab.Screen
            name={"Foods"}
            component={Foods}
            options={{
              tabBarIcon: ({ color }) => (
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
    paddingTop: 40
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
});
