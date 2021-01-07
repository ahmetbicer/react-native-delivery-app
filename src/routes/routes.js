import 'react-native-gesture-handler';
import React, { useEffect, useContext, useState } from 'react';
import { View } from 'react-native';
import { AuthContext } from '../providers/AuthContext';
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import colors from '../constants/colors';
import AuthStackNavigator from '../navigation/auth-stack-navigator';
import UserTabNavigator from '../navigation/user-tab-navigator';
import RestaurantTabNavigator from '../navigation/restaurant-tab-navigator';
import DriverTabNavigator from '../navigation/driver-tab-navigator';

export default function Routes() {
    const { user, type, setAuthenticatedUser } = useContext(AuthContext);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function checkUser() {
            let data = await AsyncStorage.getItem("user");
            if (data) {
                await setAuthenticatedUser(data)
                setLoading(false)
            }
            else {
                setLoading(false)
            }
        }

        checkUser();
    }, [])

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator color={colors.yellow} size={"large"} />
            </View>
        )
    }

    return (
        <NavigationContainer>
            {type == undefined && <AuthStackNavigator />}
            {type == "USER" && <UserTabNavigator />}
            {type == "RESTAURANT" && <RestaurantTabNavigator />}
            {type == "DRIVER" && <DriverTabNavigator />}
        </NavigationContainer>
    );
}