import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from '../../components/common/app-bar';

export default function CheckoutScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <AppBar screenName={props.route.name} />
      <View style={styles.container}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
})
