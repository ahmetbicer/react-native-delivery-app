import 'react-native-gesture-handler';
import * as React from 'react';
import { AuthProvider } from './src/providers/AuthContext';
import Routes from './src/routes/routes';
import { CartProvider } from './src/providers/CartContext';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </CartProvider>
    </AuthProvider>
  );
}