import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';

export const AuthContext = React.createContext({
    user: undefined,
    login: (email, password) => { },
    logout: () => { },
    setToken: () => { }
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);

    return (
        <AuthContext.Provider value={{
            user,
            login: async (email, password) => {
                let response = await fetch("http://10.0.2.2:8000/api/login", {
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
                    let user = { token: data.token };
                    await AsyncStorage.setItem("token", JSON.stringify(user));
                    setUser(user);
                    return true;
                }
                else {
                    return false;
                }
            },
            logout: async () => {
                await AsyncStorage.removeItem("token")
                setUser(undefined);
            },
            setToken: async (token) => {
                let user = { token: token };
                await AsyncStorage.setItem("token", JSON.stringify(user));
                setUser(user);
            }
        }}>
            {children}
        </AuthContext.Provider>
    );
}
