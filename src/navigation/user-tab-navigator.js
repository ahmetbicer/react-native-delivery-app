
import * as React from 'react';
import { View } from 'react-native';

import HomeStackNavigator from './user/home-stack-navigator';
import SearchStackNavigator from './user/search-stack-navigator';
import ProfileStackNavigator from './user/profile-stack-navigator';
import CartStackNavigator from './user/cart-stack-navigator';

import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function UserTabNavigator() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                keyboardHidesTabBar: true,
                showLabel: false,
                inactiveTintColor: colors.gray,
                activeTintColor: colors.yellow,
                style: {
                    height: 60,
                    backgroundColor: colors.black,
                    borderTopWidth: 0,
                    elevation: 0,
                },
            }}>
            <Tab.Screen
                name="HomeStack"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="silverware-fork-knife" color={color} size={size} />
                    ),
                }}
                component={HomeStackNavigator}
            />
            <Tab.Screen
                name="SearchStack"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="magnify" color={color} size={size} />
                    ),
                }}
                component={SearchStackNavigator}
            />
            <Tab.Screen
                name="CartStack"
                options={{
                    unmountOnBlur: true,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="cart" color={color} size={size} />
                    ),
                }}
                component={CartStackNavigator}
            />
            <Tab.Screen
                name="ProfileStack"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View>
                            <Icon name="account" color={color} size={size} />
                            {/* <View style={styles.badge}></View> */}
                        </View>
                    ),
                }}
                component={ProfileStackNavigator}
            />
        </Tab.Navigator>
    );
}