import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default function AppBar(props) {
  const navigation = useNavigation();

  const _handleMore = () => console.log('Shown more');
  if (props.screenName == 'Home') {
    return (
      <Appbar.Header style={styles.bar}>
        <Appbar.Content />
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
        <Appbar.Content />
        <Appbar.Action
          icon="account-circle-outline"
          onPress={_handleMore}
          size={32}
        />
      </Appbar.Header>
    );
  } else if (props.screenName == 'Orders') {
    return (
      <Appbar.Header style={styles.bar}>
        <Appbar.Content title="Orders" />
      </Appbar.Header>
    );
  } else if (props.screenName == 'Cart') {
    return (
      <Appbar.Header style={styles.bar}>
        <Appbar.Content />
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
          color={colors.white}
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'rgba(220, 220, 220, 0.3)',
            borderRadius: 15
          }}
        />
        <Appbar.Content color={colors.white} />
        <Appbar.Action
          icon="heart"
          onPress={() => props.setFavorite(!props.favorite)}
          size={18}
          color={props.favorite ? colors.red : colors.white}
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'rgba(220, 220, 220, 0.3)',
            borderRadius: 15
          }}
        />
      </Appbar.Header>
    );
  }
}

const styles = StyleSheet.create({
  bar: {
    height: 40,
    marginTop: 10,
    backgroundColor: 'transparent',
    elevation: 0,
  },
});
