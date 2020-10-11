import * as React from 'react';
import {useEffect} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {Appbar} from 'react-native-paper';
import colors from '../constants/colors';

export default function AppBar(props) {
  const _handleMore = () => console.log('Shown more');
  if (props.screenName == 'Home') {
    return (
      <Appbar.Header
        style={{
          backgroundColor: 'transparent',
          elevation: 0,
        }}>
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
      <Appbar.Header
        style={{
          backgroundColor: 'transparent',
          elevation: 0,
        }}>
        <Appbar.Action icon="text-short" onPress={_handleMore} size={32} />
        <Appbar.Content />
        <Appbar.Action icon="delete-outline" onPress={_handleMore} size={32} />
      </Appbar.Header>
    );
  } else if (props.screenName == 'Favorites') {
    return (
      <Appbar.Header
        style={{
          backgroundColor: 'transparent',
          elevation: 0,
        }}>
        <Appbar.Content title="Favorites" />
      </Appbar.Header>
    );
  } else if (props.screenName == 'Checkout') {
    return (
      <Appbar.Header
        style={{
          backgroundColor: 'transparent',
          elevation: 0,
        }}>
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
  }
}
