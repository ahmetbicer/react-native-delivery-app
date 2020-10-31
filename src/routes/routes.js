import 'react-native-gesture-handler';
import React, { useEffect, useContext, useState } from 'react';
import { View } from 'react-native';
import { AuthContext } from '../providers/AuthContext';
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import colors from '../constants/colors';
import AppTabNavigator from '../navigation/app-tab-navigator';
import AuthStackNavigator from '../navigation/auth-stack-navigator';

export default function Routes() {
    const { user, login } = useContext(AuthContext);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.getItem("user").then((res) => {
            if (res) {
                //check for tokens
                login();
            }
            setLoading(false)
        })
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
            {user ? <AppTabNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
    );
}