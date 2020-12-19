import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';

export const AuthContext = React.createContext({
    user: undefined,
    login: (email, password) => { },
    logout: () => { },
    setAuthenticatedUser: (data) => { }
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);

    return (
        <AuthContext.Provider value={{
            user,
            login: async (email, password) => {
                const url = "http://10.0.2.2:8000/api/";
                let response = await fetch(url + "login", {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({
                        username: email,
                        password: password
                    })
                })

                if (response.status == 200) {
                    let data = await response.json()
                    let user = { email: data.email, name: data.name, token: data.token };
                    await AsyncStorage.setItem("user", JSON.stringify(user));
                    setUser(user);
                    return true;
                }
                else {
                    return false;
                }
            },
            logout: async () => {
                await AsyncStorage.removeItem("user")
                setUser(undefined);
            },
            setAuthenticatedUser: async (data) => {
                let user = JSON.parse(data);
                await AsyncStorage.setItem("user", JSON.stringify(user));
                setUser(user);
            }
        }}>
            {children}
        </AuthContext.Provider>
    );
}
