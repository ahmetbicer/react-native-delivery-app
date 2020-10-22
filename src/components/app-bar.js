import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

export default function AppBar(props) {
  const navigation = useNavigation();

  const _handleMore = () => console.log('Shown more');
  if (props.screenName == 'Home') {
    return (
      <Appbar.Header style={styles.bar}>
        {props.showPageTitle ? (
          <Appbar.Content title={"Let's Find"} subtitle={'Something to Eat.'} />
        ) : (
          <Appbar.Content />
        )}
        <Appbar.Action
          icon="account-circle-outline"
          onPress={_handleMore}
          size={32}
        />
      </Appbar.Header>
    );
  } else if (props.screenName == 'Search') {
    return (
      <Appbar.Header style={styles.bar}>
        <Appbar.Action icon="text-short" onPress={_handleMore} size={32} />
        <Appbar.Content />
        <Appbar.Action icon="delete-outline" onPress={_handleMore} size={32} />
      </Appbar.Header>
    );
  } else if (props.screenName == 'Orders') {
    return (
      <Appbar.Header style={styles.bar}>
        <Appbar.Content title="Orders" />
      </Appbar.Header>
    );
  } else if (props.screenName == 'Checkout') {
    return (
      <Appbar.Header style={styles.bar}>
        {props.showPageTitle ? (
          <Appbar.Content title={'My Orders'} />
        ) : (
          <Appbar.Content />
        )}
        <Appbar.Action
          icon="account-circle-outline"
          onPress={_handleMore}
          size={32}
        />
      </Appbar.Header>
    );
  } else if (props.screenName == 'RestaurantDetail') {
    return (
      <Appbar.Header style={styles.bar}>
        <Appbar.Action
          icon="chevron-left"
          onPress={() => navigation.goBack()}
          size={32}
        />
        <Appbar.Content />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} size={32} />
      </Appbar.Header>
    );
  }
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
});
