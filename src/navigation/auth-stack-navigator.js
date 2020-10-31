
import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from '../screens/auth/login'
import RegisterScreen from '../screens/auth/register'
const Stack = createStackNavigator();

export default function AuthStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    );
}