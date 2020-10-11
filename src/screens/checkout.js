import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Headline, Title} from 'react-native-paper';
import AppBar from '../components/app-bar';
import CheckoutBottomSheet from '../components/checkout-bottom-sheet';
import CheckoutList from '../components/checkout-list';

export default function CheckoutScreen(props) {
  const [showPageTitle, setShowPageTitle] = useState(false);

  const handleScroll = (event) => {
    if (event.nativeEvent.contentOffset.y > 60) {
      setShowPageTitle(true);
    } else {
      setShowPageTitle(false);
    }
  };

  return (
    <View style={{flex: 1}}>
      <AppBar showPageTitle={showPageTitle} screenName={props.route.name} />
      <ScrollView style={styles.container} onScroll={handleScroll}>
        <Title style={styles.title}>
          My
          <Headline style={styles.subtitle}> Orders</Headline>
        </Title>
        <CheckoutList />
      </ScrollView>
      <CheckoutBottomSheet />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    fontWeight: 'bold',
    letterSpacing: 0.75,
  },
  subtitle: {
    fontSize: 32,
    lineHeight: 36,
    marginVertical: 0,
    letterSpacing: 0.6,
  },
});
