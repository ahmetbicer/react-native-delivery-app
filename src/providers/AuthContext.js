import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';

export const AuthContext = React.createContext({
    user: undefined,
    login: () => { },
    logout: () => { }
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);

    return (
        <AuthContext.Provider value={{
            user,
            login: () => {
                let fakeUser = { username: "hey" };
                setUser(fakeUser);
                AsyncStorage.setItem("user", JSON.stringify(fakeUser))
            },
            logout: () => {
                setUser(undefined);
                AsyncStorage.removeItem("user")
            }
        }}>
            {children}
        </AuthContext.Provider>
    );
}
