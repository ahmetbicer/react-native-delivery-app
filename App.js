import 'react-native-gesture-handler';
import * as React from 'react';
import { AuthProvider } from './src/providers/AuthContext';
import Routes from './src/routes/routes';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}